import React from 'react'

export const metadata = {
    title: 'Home',
    description: 'home page description',
}

export default function HomeLayout({children}: {children: React.ReactNode}) {
    return <>{children}</>
}
