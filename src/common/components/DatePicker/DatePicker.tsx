import React, {ComponentProps, forwardRef, useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {CustomDatePickerWrapper} from 'common/components/DatePicker/styled'
import {Control, Controller, useForm} from 'react-hook-form'
import * as dns from 'dns'

interface RHFDatePickerFieldProps {
    control: Control<any>
    name: string
    placeholder?: string
}

export const CustomDatePicker = forwardRef<HTMLInputElement, RHFDatePickerFieldProps>((props, ref) => {
    const [startDate, setStartDate] = useState(new Date())
    const {control} = useForm()
    const setDateHandler = (date: Date) => {
        setStartDate(date)
    }

    return (
        <CustomDatePickerWrapper>
            Date of birthday <br />
            <Controller
                defaultValue={{...props}}
                control={props.control}
                name={props.name}
                render={({field, fieldState}) => (
                    <DatePicker
                        onChange={date => {
                            field.onChange(date ? date.valueOf() : null)
                        }}
                        value={field.value}
                        name={field.name}
                        ref={field.ref}
                        dateFormat='dd.MM.yyyy'
                    />
                )}
            />
        </CustomDatePickerWrapper>
    )
})
CustomDatePicker.displayName = 'CustomDatePicker'
