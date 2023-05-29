'use client'

import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {appReducer} from 'redux/appSlice'

export const store = configureStore({
    reducer: {
        appReducer,
    },
    devTools: true,
    // middleware: gDM => gDM(),
})

// setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
