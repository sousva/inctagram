import type {AppProps} from 'next/app'
import React, {ReactElement} from 'react'
import {NextPage} from 'next'
import {Providers} from '_app/Provider'
import {useLoader} from 'shared/hooks/useLoader'
import 'shared/styles/nprogress.css'
import {SessionProvider} from 'next-auth/react'

// export type NextPageWithLayout<P = {}> = NextPage<P> & {
//     getLayout?: (page: ReactElement) => ReactNode
// }
export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactElement
}

type AppPropsWithLayout = AppProps & {
    // Component: NextPageWithLayout
    Component: any
}

export default function App({Component, pageProps: {session, ...pageProps}}: AppPropsWithLayout) {
    useLoader()

    // @ts-ignore
    const getLayout = Component.getLayout ?? (page => page)

    return (
        <SessionProvider session={session}>
            <Providers>{getLayout(<Component {...pageProps} />)}</Providers>
        </SessionProvider>
    )
}
