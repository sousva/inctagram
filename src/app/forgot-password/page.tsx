'use client'

import {AuthContainer} from 'common/components/AuthContainer/AuthContainer';
import {Button} from 'common/components/Button/Button';
import {InputText} from 'common/components/InputText/InputText';
import React, {useState} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useForgotPasswordMutation} from 'redux/authAPI'
import styled from 'styled-components';

const Title = styled.p`
  margin: 0 0 35px 0;
  padding: 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: ${props => props.theme.palette.light[100]};
`

const Typography = styled.p`
  padding: 0;
  text-align: start;
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.theme.palette.light[900]};
  margin: 7px 0 0 0;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px
`

const ButtonWrapper = styled(Button)`
  height: 36px;
  width: 100%;
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
        console.log(token)
        if (token) {
            forgotPassword({email, recaptcha: token})
        }
    }

    return (

            <AuthContainer>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Title>Forgot Password</Title>
                    <InputText {...register('email')} label={'Email'} placeholder={'Epam@epam.com'}/>
                    <Wrapper>
                        <Typography>Enter your email address and we will send you further instructions</Typography>
                        <ButtonWrapper type="submit">Send Link</ButtonWrapper>
                        <ButtonWrapper type="submit" variant={'text'}>Back to Sign In</ButtonWrapper>
                        <ReCAPTCHA sitekey={'6LdEe1gmAAAAAI7O13oex31iSVHR8eV1zutI9nLA'}
                                   onChange={(token: string | null) => setToken(token)}/>
                    </Wrapper>
                </form>
            </AuthContainer>
    )
}

export default ForgotPassword
