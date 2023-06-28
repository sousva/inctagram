import React, {PropsWithChildren, ReactElement} from 'react'
import {Aside} from 'common/components/Aside/Aside'
import {HomeWrapper} from 'pages/profile/styled'
import {NextPage} from 'next'
import {LayoutWithHeader} from 'common/Layouts/LayoutWithHeader'

export const HomeLayout: NextPage<PropsWithChildren> = ({children}) => {
    return (
        // @ts-ignore
        <LayoutWithHeader>
            <HomeWrapper>
                <Aside />
                <section>{children}</section>
            </HomeWrapper>
        </LayoutWithHeader>
    )
}

export const getHomeLayout = (page: ReactElement) => {
    return <HomeLayout>{page}</HomeLayout>
}
