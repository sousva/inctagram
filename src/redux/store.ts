'use client'

import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {appReducer} from 'redux/appSlice'
import {authAPI} from './authAPI'

export const store = configureStore({
    reducer: {
        app: appReducer,
        [authAPI.reducerPath]: authAPI.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authAPI.middleware),
})

setupListeners(store.dispatch)
