import React from 'react'
import {Providers} from 'redux/Provider'
import StyledComponentsRegistry from 'lib'
import {Header} from 'common/components'
import {TemporalyNavigation} from '../common/TemporalyNavigation/TemporalyNavigation'
import {LogOut} from '../common/components/LogOut/LogOut'

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
                        <div id='modal'></div>
                        <Header />
                        {/*<TemporalyNavigation />*/}
                        <main>{children}</main>
                        <LogOut />
                    </body>
                </Providers>
            </StyledComponentsRegistry>
        </html>
    )
}
