'use client'
import React from 'react'
import {useAppDispatch, useAppSelector} from 'common/hooks/reduxHooks'
import {setThemeAppAC} from 'redux/appSlice'
import {IconButton} from '../IconButton/IconButton'
import MoonIcon from '@icons/moon.svg'
import SunIcon from '@icons/sun.svg'

export const ThemeSwitcher = () => {
    const dispatch = useAppDispatch()
    const themeApp = useAppSelector(state => state.app.theme)

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
