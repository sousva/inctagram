import styled from 'styled-components'

export const HeaderStyled = styled.header`
    border-bottom: 1px solid ${props => props.theme.palette.dark['300']};
    margin-bottom: 24px;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
            padding: 12px 0;
            text-decoration: none;
            font-weight: 600;
            font-size: 26px;
            color: ${props => props.theme.textColor};
        }
    }
`
