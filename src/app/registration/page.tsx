'use client'
import React from 'react'
import {InputText} from 'common/components/InputText/InputText'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Button} from 'common/components/Button/Button'
import {InputPassword} from 'common/components/InputPassword/InputPassword'
import {RegistrationPageStyled} from './registrationPage.styled'
import {IconButton} from 'common/components/IconButton/IconButton'
import GoogleIcon from './../../common/assets/icons/google.svg'
import GithubWhite from '../../common/assets/icons/githubWhite.svg'
import GithubBlack from '../../common/assets/icons/githubBlack.svg'
import {useAppSelector} from 'common/hooks/useAppDispatch'
import {AuthContainer} from 'common/components/AuthContainer/AuthContainer'

type Inputs = {
    Username: string
    Email: string
    Password: string
    PasswordConfirmation: string
    textarea: string
}

export default function Page() {
    const theme = useAppSelector(state => state.appReducer.theme)
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => alert(JSON.stringify(data, null, 2))

    return (
        <AuthContainer>
            <RegistrationPageStyled>
                <h1>Sign Up</h1>
                <div>
                    <IconButton>
                        <GoogleIcon />
                    </IconButton>
                    <IconButton>{theme === 'light' ? <GithubBlack /> : <GithubWhite />}</IconButton>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputText label={'Username'} type={'text'} {...register('Username')} error={errors.Username} />
                    <InputText label={'Email'} type={'email'} {...register('Email')} error={errors.Username} />
                    <InputPassword label={'Password'} {...register('Password')} error={errors.Username} />
                    <InputPassword
                        label={'Password confirmation'}
                        {...register('PasswordConfirmation')}
                        error={errors.Username}
                    />
                    <Button type={'submit'}>Submit</Button>
                    <p>Do you have an account?</p>
                    <Button type={'button'} variant={'text'}>
                        Sign In
                    </Button>
                </form>
            </RegistrationPageStyled>
        </AuthContainer>
    )
}
