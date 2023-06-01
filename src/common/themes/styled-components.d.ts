import 'styled-components'
interface IPalette {
    100: string
    300: string
    500: string
    700: string
    900: string
}

declare module 'styled-components' {
    export interface DefaultTheme {
        name: string
        borderRadius: string
        bodyColor: string
        textColor: string
        palette: {
            common: {
                black: string
                white: string
            }
            primary: IPalette
            success: IPalette
            danger: IPalette
            warning: IPalette
            dark: IPalette
            light: IPalette
        }
    }
}
