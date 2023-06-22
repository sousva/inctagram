import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {CustomDatePickerWrapper} from 'common/components/DatePicker/styled'
import {Control, Controller} from 'react-hook-form'
import {IFormInput} from 'common/components/GeneralInformation/GeneralInformationForm/GeneralInformationForm'

type DatePickerPropsType = {
    control: Control<IFormInput, {dateOfBirthday: Date}>
}

export const CustomDatePicker = React.forwardRef<DatePicker, DatePickerPropsType>((props, ref) => {
    return (
        <CustomDatePickerWrapper>
            Date of Birthday <br />
            <Controller
                control={props.control}
                name='dateOfBirth'
                render={({field}) => (
                    <DatePicker
                        ref={ref}
                        dateFormat={'dd.MM.yyyy'}
                        selected={field.value}
                        onChange={date => field.onChange(date)}
                    />
                )}
            />
        </CustomDatePickerWrapper>
    )
})
CustomDatePicker.displayName = 'CustomDatePicker'
