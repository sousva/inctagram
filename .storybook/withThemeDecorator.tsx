import {ThemeProvider} from 'styled-components'
import {lightTheme} from '../src/common/themes/lightTheme'
import {GlobalStyle} from '../src/common/themes/GlobalStyle'
import {Decorator} from '@storybook/react'
import {darkTheme} from '../src/common/themes/darkTheme'

const THEMES = {
    light: lightTheme,
    dark: darkTheme,
}
export const withThemeDecorator: Decorator = (Story, context) => {
    const {theme} = context.globals
    return (
        // @ts-ignore
        <ThemeProvider theme={THEMES[theme] || THEMES['light']}>
            <GlobalStyle />
            <Story />
        </ThemeProvider>
    )
}
