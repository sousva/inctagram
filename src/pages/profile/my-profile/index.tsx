'use client'
import React from 'react'
import Link from 'next/link'
import {PATH} from 'common/constant/PATH'

export default function Page() {
    return (
        <>
            My Profile page <Link href={PATH.PROFILE_SETTINGS}> Profile Settings</Link>
        </>
    )
}
