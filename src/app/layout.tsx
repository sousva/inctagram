import React from 'react'
import {Provider} from 'redux/Provider'
import {Footer, Header} from 'common/components'
import StyledComponentsRegistry from 'lib'
import SignUp from './SignUp/page'

export const metadata = {
    title: 'Home page title',
    description: 'Home page description',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang='ru'>
            <body>
                <Header />
                <main>
                    <SignUp />
                    <StyledComponentsRegistry>
                        <Provider>{children}</Provider>
                    </StyledComponentsRegistry>
                </main>
                <Footer />
            </body>
        </html>
    )
}
