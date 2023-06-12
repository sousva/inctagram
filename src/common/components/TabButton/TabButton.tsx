import styled, {css} from 'styled-components'

export const TabButton = styled.button.attrs(active => active)`
    padding: 6px 24px;
    cursor: pointer;
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 2px solid #4c4c4c;
    font-size: 16px;
    font-weight: 600;
    font-family: Inter, sans-serif;
    letter-spacing: 0.7px;
    color: #4c4c4c;
    background-color: inherit;

    ${({active}) =>
        active &&
        css`
            color: #397df6;
            border-bottom-color: #397df6;
        `}
`
