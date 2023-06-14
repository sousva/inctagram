import styled from 'styled-components'

export const CustomDatePickerWrapper = styled.div`
    .react-datepicker__header,
    .react-datepicker,
    .react-datepicker__today-button {
        background-color: #171717;
        border: none;
    }

    .react-datepicker__current-month,
    .react-datepicker__day--disabled {
        color: white !important;
    }

    .react-datepicker__calendar-icon {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 18px;
        height: 20px;
    }

    input {
        position: relative;
    }

    input,
    .react-datepicker-ignore-onclickoutside {
        background-color: #171717;
        border: none;
        color: #fafafa;
    }

    .react-datepicker__triangle {
        display: none;
    }

    .react-datepicker__day-name,
    .react-datepicker__day {
        color: #4c4c4c;
    }
`
