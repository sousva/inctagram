'use client'
import React from 'react'
import {useAppDispatch} from '../../hooks'
import {setThemeAppAC} from '../../../redux/appSlice'
import {useAppSelector} from '../../hooks/useAppDispatch'
import {HeaderStyled} from './Header.styled'
import Link from 'next/link'
import {Container} from '../Container/Container'

export const Header = () => {
    const dispatch = useAppDispatch()
    const themeApp = useAppSelector(state => state.appReducer.theme)

    const theme = themeApp === 'light' ? 'dark' : 'light'

    const handleThemeChange = () => {
        dispatch(setThemeAppAC({theme}))
    }
    return (
        <HeaderStyled>
            <Container>
                <Link href={'/'}>Inctagram</Link>
                <button onClick={handleThemeChange}>theme</button>
            </Container>
        </HeaderStyled>
    )
}
