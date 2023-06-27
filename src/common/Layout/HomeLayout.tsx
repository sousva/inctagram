import React from 'react'
import {Aside} from 'common/components/Aside/Aside'
import {HomeWrapper} from 'pages/profile/styled'

export const metadata = {
    title: 'Home',
    description: 'home page description',
}

export default function HomeLayout({children}: {children: React.ReactNode}) {
    return (
        <HomeWrapper>
            <Aside />
            <section>{children}</section>
        </HomeWrapper>
    )
}
