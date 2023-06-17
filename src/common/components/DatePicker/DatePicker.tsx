import React, {ComponentProps, forwardRef, useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {CustomDatePickerWrapper} from 'common/components/DatePicker/styled'

export const CustomDatePicker = forwardRef<HTMLInputElement, ComponentProps<'input'>>(() => {
    const [startDate, setStartDate] = useState(new Date())

    const setDateHandler = (date: Date) => {
        setStartDate(date)
    }

    return (
        <CustomDatePickerWrapper>
            Date of birthday <br />
            <DatePicker dateFormat='dd.MM.yyyy' selected={startDate} onChange={setDateHandler} />
        </CustomDatePickerWrapper>
    )
})
CustomDatePicker.displayName = 'CustomDatePicker'
