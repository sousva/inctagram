import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {UserResponseType} from './types/authTypes'
import {UserType} from './authAPITypes'

const initialState: UserType = {
    email: null,
    userId: null,
    userName: null,
}

export const userSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        SetUser: (state, action: PayloadAction<UserResponseType>) => {
            state = {...action.payload}
            return state
        },
    },
})

export const userReducer = userSlice.reducer
export const {SetUser} = userSlice.actions
