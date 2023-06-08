'use client'

import React from 'react'
import {AuthContainer} from 'common/components/AuthContainer/AuthContainer'
import {LoginWrapperStyled} from 'app/login/loginWrapper.styled'
import {InputText} from 'common/components/InputText/InputText'
import {InputPassword} from 'common/components/InputPassword/InputPassword'
import Link from 'next/link'
import {Button} from 'common/components/Button/Button'
import {useRouter} from 'next/navigation'
import {PATH} from 'common/constans/path/path'
import Image from 'next/image'
import iconGoogle from 'common/assets/icons/google1.png'
import iconGitHub from 'common/assets/icons/github1.png'

export default function Login() {
    const router = useRouter()
    return (
        <AuthContainer>
            <LoginWrapperStyled>
                <h1>Sign In</h1>
                <div className={'iconWrapper'}>
                    <Link href={'##'}>
                        <Image src={iconGoogle} alt={'google'} />
                    </Link>
                    <Link href={'##'}>
                        <Image src={iconGitHub} alt={'gitHub'} />
                    </Link>
                </div>
                <div className={'inputLogin'}>
                    <InputText label={'Email'} />
                </div>
                <InputPassword label={'Password'} />
                <div className={'link'}>
                    <Link href={PATH.FORGOT_PASSWORD}>Forgot Password</Link>
                </div>
                <Button className={'button'}>Sign In</Button>
                <p>Don't have an account?</p>
                <Button onClick={() => router.push(PATH.REGISTRATION)} className={'button'} variant={'outlined'}>
                    Sign Up
                </Button>
            </LoginWrapperStyled>
        </AuthContainer>
    )
}
