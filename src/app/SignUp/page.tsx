'use client'

import React, {FC} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'

type PropsType = {}

type SignUpFormType = {
    username: string
    email: string
    password: string
    passwordConfirm: string
}

const SignUp: FC<PropsType> = props => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<SignUpFormType>()
    const onSubmit: SubmitHandler<SignUpFormType> = data => console.log(data)

    return (
        <form style={{display: 'flex', flexDirection: 'column', maxWidth: '200px'}} onSubmit={handleSubmit(onSubmit)}>
            <input type='text' id='username' {...register('username')} />
            <label htmlFor='username'>Username</label>
            <input type='text' id='email' {...register('email')} />
            <label htmlFor='email'>Email</label>
            <input type='password' id='password' {...register('password')} />
            <label htmlFor='password'>Password</label>
            <input type='password' id='passwordConfirm' {...register('passwordConfirm')} />
            <label htmlFor='passwordConfirm'>Password confirmation</label>
            <button>Sign Up</button>
        </form>
    )
}

export default SignUp
