'use client'

import React, {useEffect} from 'react'
import {AuthContainer} from 'common/components/AuthContainer/AuthContainer'

import {InputText} from 'common/components/InputText/InputText'
import {InputPassword} from 'common/components/InputPassword/InputPassword'
import Link from 'next/link'
import {Button} from 'common/components/Button/Button'
import {useRouter} from 'next/navigation'

import {IconButton} from 'common/components/IconButton/IconButton'
import GoogleIcon from 'common/assets/icons/google.svg'
import GithubBlack from 'common/assets/icons/githubBlack.svg'
import GithubWhite from 'common/assets/icons/githubWhite.svg'
import {useAppSelector} from 'common/hooks/reduxHooks'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {signIn, useSession} from 'next-auth/react'
import {PATH} from 'common/constant/PATH'

import {AuthPageStyled} from 'common/styles/RegistrationPage'
import {getLayoutWithHeader} from 'common/Layouts/LayoutWithHeader'
import {useLoginMutation} from 'redux/api/authAPI'
import cookie from 'react-cookies'

const schema = yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
})

type FormData = yup.InferType<typeof schema>

const Login = () => {
    const theme = useAppSelector(state => state.app.theme)
    const router = useRouter()
    const session = useSession()
    const [login] = useLoginMutation()

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {email: 'sevoyo7702@soremap.com', password: '123456'},
    })

    console.log(session)

    const onSubmit = async (data: FormData) => {
        login({email: data.email, password: data.password})
            .unwrap()
            .then(async payload => {
                // await cookie.save('accessToken', payload.accessToken, {path: ''})

                await signIn('credentials', {
                    // email: data.email,
                    // password: data.password,
                    accessToken: payload.accessToken,
                    // redirect: true,
                    // callbackUrl: PATH.HOME,
                })
            })
            .catch(error => console.error('rejected', error))
    }
    const handleRedirectOnRegistration = () => {
        router.push(PATH.REGISTRATION)
    }

    useEffect(() => {
        // Redirect to the protected route if the user is authenticated
        if (session.status === 'authenticated') {
            router.push(PATH.HOME)
        }
    }, [session, router])
    return (
        <AuthContainer>
            <AuthPageStyled>
                <h1>Sign In</h1>
                <div>
                    <IconButton onClick={() => signIn('google', {redirect: true, callbackUrl: PATH.HOME})}>
                        <GoogleIcon />
                    </IconButton>
                    <IconButton onClick={() => signIn('github', {redirect: true, callbackUrl: PATH.HOME})}>
                        {theme === 'light' ? <GithubBlack /> : <GithubWhite />}
                    </IconButton>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputText label={'Email'} type={'email'} {...register('email')} error={errors.email} />
                    <InputPassword label={'Password'} {...register('password')} error={errors.password} />
                    <Link href={PATH.FORGOT_PASSWORD}>Forgot Password</Link>
                    <Button type={'submit'}>Sign In</Button>
                    <p>Dont you have an account?</p>
                    <Button type={'button'} variant={'text'} onClick={handleRedirectOnRegistration}>
                        Sign Up
                    </Button>
                </form>
            </AuthPageStyled>
        </AuthContainer>
    )
}
Login.getLayout = getLayoutWithHeader
export default Login
