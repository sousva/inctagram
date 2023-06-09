'use client'
import React from 'react'
import {useAppDispatch, useAppSelector} from 'shared/hooks/reduxHooks'
import {setThemeAppAC} from '_app/store/appSlice'
import {IconButton} from 'shared/components/IconButton/IconButton'
import MoonIcon from 'common/assets/icons/moon.svg'
import SunIcon from 'common/assets/icons/sun.svg'

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
