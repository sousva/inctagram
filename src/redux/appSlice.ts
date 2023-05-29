import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type ThemeAppType = 'light' | 'dark'

const initialState = {
    theme: 'light' as ThemeAppType,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setThemeAppAC: (state, action: PayloadAction<{theme: ThemeAppType}>) => {
            state.theme = action.payload.theme
        },
    },
})

export const appReducer = appSlice.reducer
export const {setThemeAppAC} = appSlice.actions
