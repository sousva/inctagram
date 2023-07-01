'use client'

import {AuthContainer} from 'common/components/AuthContainer/AuthContainer'
import {InputText} from 'common/components/InputText/InputText'
import {ThemeSelector} from 'common/constant'
import {useAppSelector} from 'common/hooks/reduxHooks'
import Link from 'next/link'
import {useState} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useForgotPasswordMutation} from 'redux/api/authAPI'
import {PATH} from 'common/constant/PATH'
import {getLayoutWithHeader} from 'common/Layouts/LayoutWithHeader'
import {ForgotPasswordStyled} from 'common/styles/ForgotPasswordPage'
import {Button} from 'common/components/Button/Button'

type ForgotPasswordFormType = {
    email: string
}

export default function ForgotPasswordPage() {
    const theme = useAppSelector(ThemeSelector)
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
                    <h1>Forgot Password</h1>
                    <InputText {...register('email')} label={'Email'} />
                    <h2>Enter your email address and we will send you further instructions</h2>
                    <Button type='submit'>Send Link</Button>
                    <Link href={PATH.LOGIN}>Back to Sign In</Link> TODO
                    <ReCAPTCHA
                        className={'captcha'}
                        sitekey={'6LdEe1gmAAAAAI7O13oex31iSVHR8eV1zutI9nLA'}
                        onChange={(token: string | null) => setToken(token)}
                        theme={theme}
                    />
                </ForgotPasswordStyled>
            </form>
        </AuthContainer>
    )
}

ForgotPasswordPage.getLayout = getLayoutWithHeader
