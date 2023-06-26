import React from 'react'

export const metadata = {
    title: 'Messenger',
    description: 'Messenger page',
}

export default function MessengerLayout({children}: {children: React.ReactNode}) {
    return <>{children}</>
}
