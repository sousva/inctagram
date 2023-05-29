'use client'
import React, {FC} from 'react'
import {useAppDispatch} from '../hooks'
import {setThemeAppAC, ThemeAppType} from '../../redux/appSlice'
import {useAppSelector} from '../hooks/useAppDispatch'

type PropsType = {}

export const Header: FC<PropsType> = props => {
    const dispatch = useAppDispatch()
    const themeApp = useAppSelector(state => state.appReducer.theme)


    const theme = themeApp ==="light"? 'dark' : 'light'

    const handleThemeChange = () => {
        dispatch(setThemeAppAC({theme}))
    }
    return (
        <header>
            header <button onClick={handleThemeChange}>theme</button>
        </header>
    )
}
