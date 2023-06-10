import React from 'react'

export const metadata = {
    title: 'Confirmation page',
    description: 'Your account was successful confirmed',
}

export default function ConfirmedLayout({children}: {children: React.ReactNode}) {
    return <>{children}</>
}
