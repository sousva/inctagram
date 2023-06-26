import type {AppProps} from 'next/app'
import {ReactElement, ReactNode} from 'react'
import {NextPage} from 'next'
import {Providers} from 'redux/Provider'
import {SessionProvider} from 'next-auth/react'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({Component, pageProps: {session, ...pageProps}}: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? (page => page)

    return getLayout(
        <SessionProvider session={session}>
            <Providers>
                <Component {...pageProps} />
            </Providers>
        </SessionProvider>
    )
}
