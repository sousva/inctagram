'use client'
import React from 'react'
import {InputText} from '../../common/components/InputText/InputText'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Button} from '../../common/components/Button/Button'
import {Textarea} from '../../common/components/Textarea/Textarea'

type Inputs = {
    Username: string
    Email: string
    Password: string
    PasswordConfirmation: string
    textarea: string
}

export default function Page() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => alert(JSON.stringify(data, null, 2))

    return (
        <div>
            <h1>registration page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputText label={'Username'} type={'text'} {...register('Username')} error={errors.Username} />
                <InputText label={'Email'} type={'email'} {...register('Email')} error={errors.Username} />
                <InputText label={'Password'} type={'password'} {...register('Password')} error={errors.Username} />
                <InputText
                    label={'Password confirmation'}
                    type={'password'}
                    {...register('PasswordConfirmation')}
                    error={errors.Username}
                />
                <Textarea label={'textarea'} {...register('textarea')} error={errors.textarea} />
                <Button type={'submit'}>Submit</Button>
            </form>
        </div>
    )
}
