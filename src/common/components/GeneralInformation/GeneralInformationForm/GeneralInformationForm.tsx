'use client'
import React, {useState} from 'react'
import {InputText} from 'common/components/InputText/InputText'
import {CustomDatePicker} from 'common/components/DatePicker/DatePicker'
import {Textarea} from 'common/components/Textarea/Textarea'
import {Button} from 'common/components/Button/Button'
import {GeneralInformationFormWrapper} from 'common/components/GeneralInformation/GeneralInformationForm/styled'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useAppSelector} from 'common/hooks/reduxHooks'
import {toDate} from 'date-fns'

interface IFormInput {
    userName: string
    firstName: string
    lastName: string
    dateOfBirthday: Date
    city: string
    aboutMe: string
}

export const GeneralInformationForm = () => {
    const {register, control, handleSubmit} = useForm<IFormInput>()
    const userName = useAppSelector(state => state.userAuth.userName)

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data)
        const result = toDate(data.dateOfBirthday).toISOString()
        console.log(result)
    }
    return (
        <GeneralInformationFormWrapper onSubmit={handleSubmit(onSubmit)}>
            <InputText {...register('userName')} defaultValue={userName} label='Username'></InputText>
            <InputText {...register('firstName')} label='First Name'></InputText>
            <InputText {...register('lastName')} label='Last Name'></InputText>
            <CustomDatePicker control={control} {...register('dateOfBirthday')}></CustomDatePicker>
            <InputText {...register('city')} label='City'></InputText>
            <Textarea {...register('aboutMe')} label='About me'></Textarea>
            <Button type='submit' className='buttonSave'>
                Save Changes
            </Button>
        </GeneralInformationFormWrapper>
    )
}
