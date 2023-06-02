'use client'
import React from 'react'
import {InputText} from '../../../common/components/InputText/InputText'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Button} from '../../../common/components/Button/Button'
import {InputPassword} from '../../../common/components/InputPassword/InputPassword'
import {RegistrationPageStyled} from './registrationPage.styled'
import {IconButton} from '../../../common/components/IconButton/IconButton'
import GoogleIcon from '../../../common/assets/icons/google.svg'
import GithubWhite from '../../../common/assets/icons/githubWhite.svg'
import GithubBlack from '../../../common/assets/icons/githubBlack.svg'
import {useAppSelector} from '../../../common/hooks/useAppDispatch'
import {useAddNewUserMutation} from '../../../redux/authAPI'

type Inputs = {
    username: string
    email: string
    password: string
    passwordConfirmation: string
    textarea: string
}

export default function Page() {
    const theme = useAppSelector(state => state.appReducer.theme)
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Inputs>()

    const [addNewUser] = useAddNewUserMutation()
    const onSubmit: SubmitHandler<Inputs> = async data => {
        if (data.password === data.passwordConfirmation) {
            await addNewUser({email: data.email, userName: data.username, password: data.password})
        }
    }

    return (
        <RegistrationPageStyled>
            <div className={'content'}>
                <h1>Sign Up</h1>
                <div>
                    <IconButton>
                        <GoogleIcon />
                    </IconButton>
                    <IconButton>{theme === 'light' ? <GithubBlack /> : <GithubWhite />}</IconButton>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputText label={'Username'} type={'text'} {...register('username')} error={errors.username} />
                    <InputText label={'Email'} type={'email'} {...register('email')} error={errors.username} />
                    <InputPassword label={'Password'} {...register('password')} error={errors.username} />
                    <InputPassword
                        label={'Password confirmation'}
                        {...register('passwordConfirmation')}
                        error={errors.username}
                    />
                    <Button type={'submit'}>Submit</Button>
                    <p>Do you have an account?</p>
                    <Button type={'button'} variant={'text'}>
                        Sign In
                    </Button>
                </form>
            </div>
        </RegistrationPageStyled>
    )
}
