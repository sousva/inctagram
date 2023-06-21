'use client'
import React from 'react'
import {InputText} from 'common/components/InputText/InputText'
import {Textarea} from 'common/components/Textarea/Textarea'
import {Button} from 'common/components/Button/Button'
import {GeneralInformationFormWrapper} from 'common/components/GeneralInformation/GeneralInformationForm/styled'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useAppSelector} from 'common/hooks/reduxHooks'
import {toDate} from 'date-fns'
import {CustomDatePicker} from 'common/components/DatePicker/DatePicker'

export interface IFormInput {
    userName: string
    firstName: string
    lastName: string
    dateOfBirthday: Date
    city: string
    aboutMe: string
}

export const GeneralInformationForm = () => {
    const defaultDate = new Date(Date.UTC(1900, 0, 1))
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
            <CustomDatePicker defaultValue={defaultDate} control={control} {...register('dateOfBirthday')} />
            <InputText {...register('city')} label='City'></InputText>
            <Textarea {...register('aboutMe')} label='About me'></Textarea>
            <Button type='submit' className='buttonSave'>
                Save Changes
            </Button>
        </GeneralInformationFormWrapper>
    )
}
