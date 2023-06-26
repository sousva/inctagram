import React from 'react'

export const metadata = {
    title: 'My Profile',
    description: 'My profile page',
}

export default function MyProfilePageLayout({children}: {children: React.ReactNode}) {
    return <>{children}</>
}
