import React from 'react'

export const metadata = {
    title: 'Profile settings page',
    description: 'Here you can add/update your profile information and settings',
}

export default function ProfileSettingsLayout({children}: {children: React.ReactNode}) {
    return <>{children}</>
}
