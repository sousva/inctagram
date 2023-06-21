import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {CustomDatePickerWrapper} from 'common/components/DatePicker/styled'
import {Control, Controller} from 'react-hook-form'
import {IFormInput} from 'common/components/GeneralInformation/GeneralInformationForm/GeneralInformationForm'

type DatePickerPropsType = {
    control: Control<IFormInput, {dateOfBirthday: Date}>
    defaultValue: Date
}
export const CustomDatePicker = (props: DatePickerPropsType) => {
    return (
        <CustomDatePickerWrapper>
            <Controller
                defaultValue={props.defaultValue}
                control={props.control}
                name='dateOfBirthday'
                render={({field}) => (
                    <DatePicker
                        dateFormat={'dd.MM.yyyy'}
                        selected={field.value}
                        onChange={date => field.onChange(date)}
                    />
                )}
            />
        </CustomDatePickerWrapper>
    )
}
