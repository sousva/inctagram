import React from 'react'
import {Aside} from 'common/components/Aside/Aside'
import {HomeWrapper} from 'app/profile/styled'

export const metadata = {
    title: 'Home page title',
    description: 'Home page description',
}

export default function HomeLayout({children}: {children: React.ReactNode}) {
    return (
        <HomeWrapper>
            <Aside />
            <section>{children}</section>
        </HomeWrapper>
    )
}
