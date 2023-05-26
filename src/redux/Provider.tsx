'use client'

import {Provider as NativeProvider} from 'react-redux'
import React from 'react'
import {store} from 'redux/store'

export function Provider({children}: {children: React.ReactNode}) {
    return <NativeProvider store={store}>{children}</NativeProvider>
}
