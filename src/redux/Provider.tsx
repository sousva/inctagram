'use client'

import {store} from './store'
import {Provider} from 'react-redux'
import React, {ReactNode} from 'react'
import {lightTheme} from 'common/themes/lightTheme'
import {darkTheme} from 'common/themes/darkTheme'
import {GlobalStyle} from 'common/themes/GlobalStyle'
import {ThemeProvider} from 'styled-components'
import {useAppSelector} from 'common/hooks/reduxHooks'
import {SessionProvider} from 'next-auth/react'

export function Providers({children}: {children: ReactNode}) {
    return (
        <Provider store={store}>
            <ThemeStyled>{children}</ThemeStyled>
        </Provider>
    )
}

export function ThemeStyled({children}: {children: ReactNode}) {
    const theme = useAppSelector(state => state.app.theme)

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}
