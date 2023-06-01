'use client'

import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {appReducer} from 'redux/appSlice'
import {authAPI} from './authAPI'

export const store = configureStore({
    reducer: {
        appReducer,
        [authAPI.reducerPath]: authAPI.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authAPI.middleware),
    devTools: true,
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
