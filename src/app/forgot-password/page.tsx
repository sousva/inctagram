'use client'

import {SubmitHandler, useForm} from 'react-hook-form'
import ReCAPTCHA from 'react-google-recaptcha'
import React, {useState} from 'react'
import {useForgotPasswordMutation} from 'redux/api/authAPI'

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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    email
                    <input {...register('email')} />
                </label>
                <ReCAPTCHA sitekey={'6LdEe1gmAAAAAI7O13oex31iSVHR8eV1zutI9nLA'} onChange={token => setToken(token)} />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default ForgotPassword
