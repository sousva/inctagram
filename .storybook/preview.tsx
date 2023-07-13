import type {Preview} from '@storybook/react'

import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {withThemeFromJSXProvider} from '@storybook/addon-styling'
import {lightTheme} from '../src/common/themes/lightTheme'
import {darkTheme} from '../src/common/themes/darkTheme'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },

    decorators: [
        withThemeFromJSXProvider({
            themes: {
                light: lightTheme,
                dark: darkTheme,
            },
            defaultTheme: 'light',
            Provider: ThemeProvider,
            GlobalStyles,
        }),
    ],
}

export default preview
