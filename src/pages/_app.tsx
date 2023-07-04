import type {AppProps} from 'next/app'
import React, {ReactElement, ReactNode} from 'react'
import {NextPage} from 'next'
import {Providers} from 'redux/Provider'
import {useLoader} from 'common/hooks/useLoader'
import '../common/styles/nprogress.css'
import {SessionProvider} from 'next-auth/react'
export type NextPageWithLayout<P = {}> = NextPage<P> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({Component, pageProps: {session, ...pageProps}}: AppPropsWithLayout) {
    useLoader()
    const getLayout = Component.getLayout ?? (page => page)

    return (
        <Providers>
            <SessionProvider session={session}>{getLayout(<Component {...pageProps} />)}</SessionProvider>
        </Providers>
    )
}
