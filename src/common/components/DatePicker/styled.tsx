import styled from 'styled-components'

export const CustomDatePickerWrapper = styled.div`
    .react-datepicker__header,
    .react-datepicker,
    .react-datepicker__today-button {
        background-color: #171717;
        border: 0.5px solid #4c4c4c;
    }

    .react-datepicker__current-month,
    .react-datepicker__day--disabled {
        color: white !important;
    }

    .react-datepicker__calendar-icon {
        width: 18px;
        height: 20px;
    }

    input {
        width: 158px;
        height: 36px;
        position: relative;
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--today {
        border-radius: 50%;
        background-color: #4283f6;
    }

    input,
    .react-datepicker-ignore-onclickoutside {
        background-color: #171717;

        color: #fafafa;
        border: 0.5px solid #4c4c4c;
    }

    .react-datepicker__triangle {
        display: none;
    }

    .react-datepicker__day-name,
    .react-datepicker__day {
        color: #4c4c4c;
    }
`
