'use client'
import React from 'react'
import {HeaderStyled} from './Header.styled'
import Link from 'next/link'
import {Container} from '../Container/Container'
import {ThemeSwitcher} from '../ThemeSwitcher/ThemeSwitcher'

export const Header = () => {
    return (
        <HeaderStyled>
            <Container>
                <Link href={'/'}>Inctagram</Link>
                <ThemeSwitcher />
            </Container>
        </HeaderStyled>
    )
}
