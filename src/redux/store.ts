'use client'

import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {appReducer} from 'redux/appSlice'

export const store = configureStore({
    reducer: {
        app: appReducer,
    },
    middleware: gDM => gDM(),
})

setupListeners(store.dispatch)
