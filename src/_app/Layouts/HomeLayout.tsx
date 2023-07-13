import React, {PropsWithChildren, ReactElement} from 'react'
import {Aside} from 'widgets/Aside/Aside'
import {HomeWrapper} from 'shared/styles/HomePage.style'
import {NextPage} from 'next'
import {LayoutWithHeader} from '_app/Layouts/LayoutWithHeader'

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
