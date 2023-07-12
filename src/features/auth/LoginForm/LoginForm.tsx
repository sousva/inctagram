import React from 'react'
import {AuthPageStyled} from 'common/styles/RegistrationPage'
import {IconButton} from 'common/components/IconButton/IconButton'
import {signIn, useSession} from 'next-auth/react'
import GoogleIcon from 'common/assets/icons/google.svg'
import GithubBlack from 'common/assets/icons/githubBlack.svg'
import GithubWhite from 'common/assets/icons/githubWhite.svg'
import {InputText} from 'common/components/InputText/InputText'
import {InputPassword} from 'common/components/InputPassword/InputPassword'
import Link from 'next/link'
import {PATH} from 'shared/constants/PATH'
import {Button} from 'common/components/Button/Button'
import {AuthContainer} from 'common/components/AuthContainer/AuthContainer'
import {useAppSelector} from 'shared/hooks/reduxHooks'
import {useRouter} from 'next/navigation'
import {useLoginForm} from 'features/auth/LoginForm/UseLoginForm'

export const LoginForm = () => {
    const {status} = useSession()
    const router = useRouter()
    const {register, handleSubmit, isLoading, errors} = useLoginForm()

    const theme = useAppSelector(state => state.app.theme)

    const handleRedirectOnRegistration = () => {
        router.push(PATH.REGISTRATION)
    }
    console.log(status)

    if (status === 'authenticated') {
        router.push(PATH.HOME)
    }

    return (
        <AuthContainer>
            <AuthPageStyled>
                <h1>Sign In</h1>
                <div>
                    <IconButton onClick={() => signIn('google')} disabled={isLoading}>
                        <GoogleIcon />
                    </IconButton>
                    <IconButton onClick={() => signIn('github')} disabled={isLoading}>
                        {theme === 'light' ? <GithubBlack /> : <GithubWhite />}
                    </IconButton>
                </div>
                <form onSubmit={handleSubmit}>
                    <InputText label={'Email'} type={'email'} {...register('email')} error={errors.email} />
                    <InputPassword label={'Password'} {...register('password')} error={errors.password} />
                    <Link href={PATH.FORGOT_PASSWORD}>Forgot Password</Link>
                    <Button type={'submit'} disabled={isLoading}>
                        Sign In
                    </Button>
                    <p>Dont you have an account?</p>
                    <Button
                        type={'button'}
                        variant={'text'}
                        onClick={handleRedirectOnRegistration}
                        disabled={isLoading}
                    >
                        Sign Up
                    </Button>
                </form>
            </AuthPageStyled>
        </AuthContainer>
    )
}
