'use client'

import {PATH} from 'app/path'
import {AuthContainer} from 'common/components/AuthContainer/AuthContainer'
import {Button} from 'common/components/Button/Button'
import {InputText} from 'common/components/InputText/InputText'
import Link from 'next/link'
import React, {useState} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useForgotPasswordMutation} from 'redux/api/authAPI'
import styled from 'styled-components'

const ForgotPasswordStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        margin: 0 0 35px 0;
        padding: 0;
        font-weight: 700;
        font-size: 20px;
        line-height: 36px;
        color: ${props => props.theme.palette.light[100]};
    }

    .mention {
        padding: 0;
        text-align: start;
        font-size: 14px;
        line-height: 24px;
        color: ${props => props.theme.palette.light[900]};
        margin: 0;
    }

    .captcha {
        margin-top: 30px;
    }
`

const ButtonWrapper = styled(Button)`
    height: 36px;
    width: 100%;
    margin-top: 30px;
`

type ForgotPasswordFormType = {
    email: string
}

const ForgotPassword = () => {
    const {register, handleSubmit} = useForm({
        defaultValues: {
            email: '',
        },
    })

    const [token, setToken] = useState<string | null>(null)
    const [forgotPassword] = useForgotPasswordMutation()

    const onSubmit: SubmitHandler<ForgotPasswordFormType> = ({email}) => {
        if (token) {
            forgotPassword({email, recaptcha: token})
        }
    }

    return (
        <AuthContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ForgotPasswordStyled>
                    <div className={'title'}>Forgot Password</div>
                    <InputText {...register('email')} label={'Email'} />
                    <p className={'mention'}>Enter your email address and we will send you further instructions</p>
                    <ButtonWrapper type='submit'>Send Link</ButtonWrapper>
                    <Link href={PATH.LOGIN}>
                        <ButtonWrapper type='submit' variant={'text'}>
                            Back to Sign In
                        </ButtonWrapper>
                    </Link>
                    <ReCAPTCHA
                        className={'captcha'}
                        sitekey={'6LdEe1gmAAAAAI7O13oex31iSVHR8eV1zutI9nLA'}
                        onChange={(token: string | null) => setToken(token)}
                    />
                </ForgotPasswordStyled>
            </form>
        </AuthContainer>
    )
}

export default ForgotPassword
