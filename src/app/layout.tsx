import React from 'react'
import {Providers} from 'redux/Provider'
import StyledComponentsRegistry from 'lib'

export const metadata = {
    title: 'Home page title',
    description: 'Home page description',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html>
            <StyledComponentsRegistry>
                <Providers>{children}</Providers>
            </StyledComponentsRegistry>
        </html>
    )
}
