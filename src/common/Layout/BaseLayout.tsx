import React, {PropsWithChildren, ReactElement} from 'react'
import {NextPage} from 'next'
import {Header} from 'common/components'
import {NotificationBar} from 'common/components/NotificationBar/NotificationBar'

// export const BaseLayout: NextPage<PropsWithChildren> = props => {
//     const {children} = props
//
//     // @ts-ignore
//     return <Layout>{children}</Layout>
// }

export const getLayout = (page: ReactElement) => {
    return (
        <main>
            <Header />
            {page}
            <NotificationBar />
        </main>
    )
}
