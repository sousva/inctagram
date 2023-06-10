import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {GenerateId} from 'common/utils/generateID'

export type ThemeAppType = 'light' | 'dark'

export type NotificationType = {
    message: string
    type: 'success' | 'error'
    id: string
}
const initialState = {
    theme: 'dark' as ThemeAppType,
    notifications: [] as NotificationType[],
}
const testMessage = {
    id: '23',
    type: 'error',
    message: 'some mess ag fff fff ddd ddddd ddddddd ddddddd dddddddd dddd ddddddd dddddd ddddd ddddd ddde',
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setThemeAppAC: (state, action: PayloadAction<{theme: ThemeAppType}>) => {
            state.theme = action.payload.theme
        },
        SetAppNotificationAC: (state, action: PayloadAction<{notifications: Omit<NotificationType, 'id'>}>) => {
            const id = GenerateId()

            state.notifications.push({...action.payload.notifications, id})
        },
        RemoveAppNotificationAC: (state, action: PayloadAction<{id: string}>) => {
            const index = state.notifications.findIndex(index => index.id === action.payload.id)

            if (index > -1) {
                state.notifications.splice(index, 1)
            }
        },
    },
})

export const appReducer = appSlice.reducer
export const {setThemeAppAC, RemoveAppNotificationAC, SetAppNotificationAC} = appSlice.actions
