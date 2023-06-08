import React from 'react'
import {Providers} from 'redux/Provider'
import StyledComponentsRegistry from 'lib'
import {Header} from 'common/components'
import {NotificationBar} from 'common/components/NotificationBar/NotificationBar'

export const metadata = {
    title: 'Home page title',
    description: 'Home page description',
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
