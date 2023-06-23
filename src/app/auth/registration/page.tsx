import {PATH} from 'app/path'
import Link from 'next/link'
import React from 'react'
import {InputText} from 'common/components/InputText/InputText'
import {useForm} from 'react-hook-form'
import {Button} from 'common/components/Button/Button'
import {InputPassword} from 'common/components/InputPassword/InputPassword'
import GoogleIcon from '@icons/google.svg'
import GithubWhite from '@icons/githubWhite.svg'
import GithubBlack from '@icons/githubBlack.svg'
import {useAppDispatch, useAppSelector} from 'common/hooks/reduxHooks'
import {AuthContainer} from 'common/components/AuthContainer/AuthContainer'
import {AuthPageStyled, RegistrationModalContent} from 'app/auth/registration/styled'
import {IconButton} from 'common/components/IconButton/IconButton'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {Modal} from 'common/components/Modal/BaseModal'
import {useAddNewUserMutation} from 'redux/api/authAPI'
import {SetAppNotificationAC} from 'redux/appSlice'
import {Loader} from 'common/components/Loader/Loader'

const schema = yup
    .object({
        userName: yup
            .string()
            .min(6, 'Your userName is too short, min 6 characters')
            .max(30, 'Your userName is too long, max 30 characters')
            .required('User name is required'),
        email: yup.string().email().required('Email is required'),
        password: yup
            .string()
            .min(6, 'Your password is too short, min 6 characters')
            .max(20, 'Your password is too long, max 20 characters')
            .required('Password is required'),
        passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'Your passwords do not match.'),
    })
    .required('You have to confirm password.')

type FormData = yup.InferType<typeof schema>

export default function Page() {
    const dispatch = useAppDispatch()
    // const [isModalOpen, setIsModalOpen] = useState(false)
    const theme = useAppSelector(state => state.app.theme)

    const {
        register,
        handleSubmit,
        formState: {errors},
        getValues,
    } = useForm<FormData>({resolver: yupResolver(schema)})

    const [addNewUser, {isLoading}] = useAddNewUserMutation()

    const onSubmit = async (data: FormData) => {
        await addNewUser({email: data.email, userName: data.userName, password: data.password})
            .unwrap()
            // .then(() => setIsModalOpen(true))
            .then(() => {})
            .catch(error =>
                dispatch(
                    SetAppNotificationAC({notifications: {type: 'error', message: error.data.messages[0].message}})
                )
            )
    }

    const handleModalClose = () => {
        // setIsModalOpen(false)
    }

    return (
        <AuthContainer>
            {isLoading && <Loader />}
            <AuthPageStyled>
                <h1>Sign Up</h1>
                <div>
                    <IconButton>
                        <GoogleIcon />
                    </IconButton>
                    <IconButton>{theme === 'light' ? <GithubBlack /> : <GithubWhite />}</IconButton>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputText label={'UserName'} type={'text'} {...register('userName')} error={errors.userName} />
                    <InputText label={'Email'} type={'email'} {...register('email')} error={errors.email} />
                    <InputPassword label={'Password'} {...register('password')} error={errors.password} />
                    <InputPassword
                        label={'Password confirmation'}
                        {...register('passwordConfirmation')}
                        error={errors.passwordConfirmation}
                    />
                    <Button type={'submit'} disabled={isLoading}>
                        Submit
                    </Button>
                    <p>Do you have an account?</p>
                    <Link href={PATH.LOGIN}>
                        <Button type={'button'} variant={'text'}>
                            Sign In
                        </Button>
                    </Link>
                </form>
            </AuthPageStyled>
            <Modal handleClose={handleModalClose} isOpen={false} title={'Email sent'}>
                <RegistrationModalContent>
                    <div>
                        We have sent a link to confirm your email to <span>{getValues('email')}</span>
                    </div>
                    <Button onClick={handleModalClose}>OK</Button>
                </RegistrationModalContent>
            </Modal>
        </AuthContainer>
    )
}
