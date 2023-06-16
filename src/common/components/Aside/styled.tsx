import styled from 'styled-components'

export const AsideWrapper = styled.aside`
    position: sticky;
    top: 50px;
    height: calc(100vh - 100px);
    border-right: 1px solid ${props => props.theme.palette.dark['300']};

    nav {
        display: flex;
        flex-direction: column;
        gap: 22px;
    }
`
