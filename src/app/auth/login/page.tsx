'use client'

import React from 'react'
import {AuthContainer} from 'common/components/AuthContainer/AuthContainer'

import {InputText} from 'common/components/InputText/InputText'
import {InputPassword} from 'common/components/InputPassword/InputPassword'
import Link from 'next/link'
import {Button} from 'common/components/Button/Button'
import {useRouter} from 'next/navigation'
import {PATH} from 'app/path'
import {AuthPageStyled} from 'app/auth/registration/styled'
import {IconButton} from 'common/components/IconButton/IconButton'
import GoogleIcon from 'common/assets/icons/google.svg'
import GithubBlack from 'common/assets/icons/githubBlack.svg'
import GithubWhite from 'common/assets/icons/githubWhite.svg'
import {useAppDispatch, useAppSelector} from 'common/hooks/reduxHooks'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {SetAppNotificationAC} from 'redux/appSlice'
import {useAuthMeMutation, useLoginMutation} from 'redux/api/authAPI'
import {saveLocalStorage} from 'lib/LocalStorage/LocalStorage'

const schema = yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
})

type FormData = yup.InferType<typeof schema>

export default function Login() {
    const dispatch = useAppDispatch()
    const theme = useAppSelector(state => state.app.theme)
    const router = useRouter()
    const [login, {isLoading}] = useLoginMutation()
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormData>({resolver: yupResolver(schema)})

    const onSubmit = async (data: FormData) => {
        await login({email: data.email, password: data.password})
            .unwrap()
            .then(data => {
                saveLocalStorage(data)
                router.replace(PATH.HOME)
            })
            .catch(error =>
                dispatch(
                    SetAppNotificationAC({notifications: {type: 'error', message: error.data.messages[0].message}})
                )
            )
    }
    const handleRedirectOnRegistration = () => {
        router.push(PATH.REGISTRATION)
    }

    return (
        <AuthContainer>
            <AuthPageStyled>
                <h1>Sign In</h1>
                <div>
                    <IconButton>
                        <GoogleIcon />
                    </IconButton>
                    <IconButton>{theme === 'light' ? <GithubBlack /> : <GithubWhite />}</IconButton>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputText label={'Email'} type={'email'} {...register('email')} error={errors.email} />
                    <InputPassword label={'Password'} {...register('password')} error={errors.password} />
                    <Link href={PATH.FORGOT_PASSWORD}>Forgot Password</Link>
                    <Button type={'submit'} disabled={isLoading}>
                        Sign In
                    </Button>
                    <p>Dont you have an account?</p>
                    <Button type={'button'} variant={'text'} onClick={handleRedirectOnRegistration}>
                        Sign Up
                    </Button>
                </form>
            </AuthPageStyled>
        </AuthContainer>
    )
}
