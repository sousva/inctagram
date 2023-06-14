import React, {ComponentProps, ReactNode} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {NavIconWrapper} from 'common/components/NavLink/NavIcon'

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

type DefaultLinkPropsType = ComponentProps<typeof Link>

type NavLinkProps = DefaultLinkPropsType & {
    icon: ReactNode
    name: string
}

export const NavLink = (props: NavLinkProps) => {
    const pathname = usePathname()

    return (
        <NavLinkWrapper {...props} className={pathname === props.href ? 'active' : ''}>
            <NavIconWrapper active={pathname === props.href}>{props.icon}</NavIconWrapper>
            <span>{props.name}</span>
        </NavLinkWrapper>
    )
}
