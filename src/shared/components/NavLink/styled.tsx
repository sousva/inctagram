import styled from 'styled-components'
import Link from 'next/link'

export const NavLinkWrapper = styled(Link)`
    display: flex;
    align-items: center;
    gap: 15px;
    font-weight: 500;
    font-family: Inter serif;
    font-size: 14px;

    text-decoration: none;
    color: ${props => props.theme.textColor};

    &.active {
        color: ${props => props.theme.palette.primary['500']};
    }
`
