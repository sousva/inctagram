import React, {PropsWithChildren, ReactElement} from 'react'
import {NextPage} from 'next'
import {Header} from 'common/components'
import {NotificationBar} from 'common/components/NotificationBar/NotificationBar'

export const LayoutWithHeader: NextPage<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <NotificationBar />
        </>
    )
}

export const getLayoutWithHeader = (page: ReactElement) => {
    return <LayoutWithHeader>{page}</LayoutWithHeader>
}
