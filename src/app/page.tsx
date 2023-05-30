'use client'
import {InputText} from '../common/components/InputText/InputText'
import {GlobalStyle} from '../common/themes/GlobalStyle'
import React from 'react'
import {ThemeProvider} from 'styled-components'
import {darkTheme} from '../common/themes/darkTheme'
import {Footer, Header} from '../common/components'
import {useAppSelector} from '../common/hooks/useAppDispatch'
import {lightTheme} from '../common/themes/lightTheme'

export default function Page() {
    const theme = useAppSelector(state => state.appReducer.theme)

    return (
        <>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyle />
                <body>
                    <Header />
                    <main>
                        <InputText label={'some label'} />
                    </main>
                    <Footer />
                </body>
            </ThemeProvider>
        </>
    )
}
