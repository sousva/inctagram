'use client'

import React, {FC} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useAddNewUserMutation} from '../../redux/authAPI'

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
    const [addNewUser, {isSuccess}] = useAddNewUserMutation()
    const onSubmit: SubmitHandler<SignUpFormType> = async data => {
        if (data.password === data.passwordConfirm) {
            await addNewUser({email: data.email, userName: data.username, password: data.password})
        }
    }

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
