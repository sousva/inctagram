'use client'
import React, {useRef} from 'react'
import {InputText} from 'common/components/InputText/InputText'
import {Textarea} from 'common/components/Textarea/Textarea'
import {Button} from 'common/components/Button/Button'
import {GeneralInformationFormWrapper} from 'common/components/GeneralInformation/GeneralInformationForm/styled'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useAppSelector} from 'common/hooks/reduxHooks'
import {toDate} from 'date-fns'
import {CustomDatePicker} from 'common/components/DatePicker/DatePicker'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import DatePicker from 'react-datepicker'

export interface IFormInput {
    userName: string
    firstName: string
    lastName: string
    dateOfBirthday: Date
    city: string
    aboutMe: string
}

const schema = yup.object().shape({
    userName: yup
        .string()
        .required('Username is required')
        .min(6, 'Username must contain at least 6 characters')
        .max(30, 'Username must be at least 30 characters long'),
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    dateOfBirthday: yup.date().notRequired(),
    city: yup.string().required('City is required'),
    aboutMe: yup
        .string()
        .required('About me information field is required')
        .max(200, 'About me field must be at least 200 characters long'),
})

export const GeneralInformationForm = () => {
    const defaultDate = new Date(Date.UTC(1900, 0, 1))
    const datePickerRef = useRef<DatePicker>(null)
    const {
        register,
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<IFormInput>({
        resolver: yupResolver(schema),
        defaultValues: {dateOfBirthday: defaultDate},
    })
    const userName = useAppSelector(state => state.userAuth.userName)

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data)
        const result = toDate(data.dateOfBirthday).toISOString()
        console.log(result)
    }

    return (
        <GeneralInformationFormWrapper onSubmit={handleSubmit(onSubmit)}>
            <InputText {...register('userName')} defaultValue={userName} label='Username'></InputText>
            {errors.userName && <p>{errors.userName.message}</p>}
            <InputText {...register('firstName')} label='First Name'></InputText>
            <InputText {...register('lastName')} label='Last Name'></InputText>
            <CustomDatePicker control={control} {...register('dateOfBirthday')} ref={datePickerRef} />
            <InputText {...register('city')} label='City'></InputText>
            <Textarea {...register('aboutMe')} label='About me'></Textarea>
            {errors.aboutMe && <p>{errors.aboutMe.message}</p>}
            <Button type='submit' className='buttonSave'>
                Save Changes
            </Button>
        </GeneralInformationFormWrapper>
    )
}
