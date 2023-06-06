'use client'
import React from 'react'
import {reduxHooks, useAppSelector} from 'common/hooks/reduxHooks'
import {setThemeAppAC} from 'redux/appSlice'
import {IconButton} from '../IconButton/IconButton'
import MoonIcon from './../../assets/icons/moon.svg'
import SunIcon from './../../assets/icons/sun.svg'

export const ThemeSwitcher = () => {
    const dispatch = reduxHooks()
    const themeApp = useAppSelector(state => state.app.theme)
    // const themeApp = 'dark'

    const theme = themeApp === 'light' ? 'dark' : 'light'

    const handleThemeChange = () => {
        dispatch(setThemeAppAC({theme}))
    }
    return (
        <>
            {theme === 'light' ? (
                <IconButton onClick={handleThemeChange}>
                    <SunIcon />
                </IconButton>
            ) : (
                <IconButton onClick={handleThemeChange}>
                    <MoonIcon />
                </IconButton>
            )}
        </>
    )
}
