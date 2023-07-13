import {Metadata} from 'next'
import React from 'react'
import {Providers} from '_app/Provider'
import {NotificationBar} from 'features/NotificationBar/NotificationBar'
import StyledComponentsRegistry from 'shared/lib/StyledComponentsRegistry'
import {Header} from 'widgets/Header/Header'

export const metadata: Metadata = {
    title: 'Home page title',
    description: 'Home page description',
    icons: {
        icon: '/icon.ico',
    },
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html>
            <StyledComponentsRegistry>
                <Providers>
                    <body>
                        <Header />
                        <main>{children}</main>
                        <NotificationBar />
                    </body>
                </Providers>
            </StyledComponentsRegistry>
        </html>
    )
}
