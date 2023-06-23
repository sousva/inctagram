import {Metadata} from 'next'
import React from 'react'
import {Providers} from 'redux/Provider'
import {Header} from 'common/components'
import {NotificationBar} from 'common/components/NotificationBar/NotificationBar'

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
            <Providers>
                <body>
                    <Header />
                    <main>{children}</main>
                    <NotificationBar />
                </body>
            </Providers>
        </html>
    )
}
