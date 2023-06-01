import React from 'react'
import {Providers} from 'redux/Provider'
import StyledComponentsRegistry from 'lib'
import {Header} from '../common/components'

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
                        {/*<TemporalyNavigation />*/}
                        <main>{children}</main>
                    </body>
                </Providers>
            </StyledComponentsRegistry>
        </html>
    )
}
