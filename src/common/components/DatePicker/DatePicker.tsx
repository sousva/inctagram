import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {CustomDatePickerWrapper} from 'common/components/DatePicker/styled'

export const CustomDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date())

    const setDateHandler = (date: Date) => {
        setStartDate(date)
    }

    const today = new Date()
    return (
        <CustomDatePickerWrapper>
            Date of birthday <br />
            <DatePicker dateFormat='dd.MM.yyyy' selected={startDate} onChange={setDateHandler} minDate={today} />
        </CustomDatePickerWrapper>
    )
}
