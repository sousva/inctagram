'use client'

import {useForm} from 'react-hook-form'
import ReCAPTCHA from 'react-google-recaptcha'
import React from 'react'

const ForgotPassword = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            email: ''
        }
    })

    console.log(errors)

    return <div>
        <form onSubmit={handleSubmit((data) => {
            console.log(data)
        })}>
            <label>
                email
                <input {...register('email')} />
            </label>
            <ReCAPTCHA sitekey={'6LdEe1gmAAAAAI7O13oex31iSVHR8eV1zutI9nLA'} />
            <button type='submit'>submit</button>
        </form>
    </div>
}

export default ForgotPassword

