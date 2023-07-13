import styled from 'styled-components'

export const IconButtonStyled = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 35px;
    height: 35px;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(1);
    }
`
