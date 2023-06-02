'use client'
import React, {FC} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useAddNewUserMutation} from 'redux/authAPI'
import {InputText} from '../../common/components/InputText/InputText'
import {Button} from '../../common/components/Button/Button'

type PropsType = {}

type SignUpFormType = {
    username: string
    email: string
    password: string
    passwordConfirm: string
}

export default function Page() {
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
        <div>
            <h1>registration page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputText label={'Username'} type={'text'} {...register('username')} error={errors.username} />
                <InputText label={'Email'} type={'email'} {...register('email')} error={errors.username} />
                <InputText label={'Password'} type={'password'} {...register('password')} error={errors.username} />
                <InputText
                    label={'Password confirmation'}
                    type={'password'}
                    {...register('passwordConfirm')}
                    error={errors.username}
                />
                <Button type={'submit'}>Submit</Button>
            </form>
        </div>
    )
}
