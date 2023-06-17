import styled from 'styled-components'

export const CustomDatePickerWrapper = styled.div`
    .react-datepicker__header,
    .react-datepicker,
    .react-datepicker__today-button {
        background-color: #171717;
        border: 0.5px solid #4c4c4c;
    }

    .react-datepicker__header {
        border: none;
    }

    .react-datepicker__current-month {
        height: 50px;
    }

    .react-datepicker__current-month,
    .react-datepicker__day--disabled {
        color: white !important;
    }

    .react-datepicker__navigation--previous {
        background-color: #4c4c4c;
        left: 166px;
    }

    .react-datepicker__navigation {
        width: 36px;
        height: 36px;
        border-radius: 50%;

        transform: translate(-20%, 35%);
    }

    .react-datepicker__navigation--next {
        background-color: #4c4c4c;
    }

    .react-datepicker__current-month {
        display: flex;
        padding-left: 30px;
        align-items: center;
    }

    .react-datepicker-popper {
        width: 300px;
        padding: 0;
        border-radius: 0 !important;
    }

    .react-datepicker__month-container {
        border-radius: 0;
    }

    .react-datepicker__day {
        color: white !important;
    }

    .react-datepicker__day--outside-month {
        color: #4c4c4c !important;
    }

    .react-datepicker__calendar-icon {
        width: 18px;
        height: 20px;
    }

    input {
        width: 158px;
        height: 36px;
        position: relative;
        padding: 5px;
        font-size: 16px;
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
