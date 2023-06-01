'use client'

import {SubmitHandler, useForm} from 'react-hook-form'
import React from 'react'
import {useNewPasswordMutation} from 'redux/authAPI'

type NewPasswordFormType = {
    password: string
    passwordConfirm: string
}

export default function NewPassword() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            password: '',
            passwordConfirm: '',
        },
        mode: 'onTouched',
    })

    const [newPassword] = useNewPasswordMutation()

    const onSubmit: SubmitHandler<NewPasswordFormType> = ({password, passwordConfirm}) => {
        if (password === passwordConfirm) {
            // TODO fix hz
            newPassword({newPassword: password, recoveryCode: 'hz'})
        }
    }

    const registerParams = {
        minLength: {
            value: 6,
            message: 'Your password must be at least 6 characters',
        },
        maxLength: {
            value: 20,
            message: 'Your password must be 20 or less characters',
        },
    }

    const newPasswordError = errors.password && <span style={{color: 'hotpink'}}>{errors.password.message}</span>
    const passwordConfirmError = errors.passwordConfirm && (
        <span style={{color: 'hotpink'}}>{errors.passwordConfirm.message}</span>
    )

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>
                        New password
                        <input type='password' {...register('password', registerParams)} />
                        {newPasswordError}
                    </label>
                </div>
                <div>
                    <label>
                        Password confirmation
                        <input type='password' {...register('passwordConfirm', registerParams)} />
                        {passwordConfirmError}
                    </label>
                </div>
                <p>Your password must be between 6 and 20 characters</p>
                <button type='submit'>Create new password</button>
            </form>
        </div>
    )
}
