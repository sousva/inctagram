import React from 'react'
import Link from 'next/link'
import {PATH} from 'shared/constants/PATH'
import {getHomeLayout} from '_app/Layouts/HomeLayout'

export default function MyProfilePage() {
    return (
        <>
            My Profile page <Link href={PATH.PROFILE_SETTINGS}> Profile Settings</Link>
        </>
    )
}
MyProfilePage.getLayout = getHomeLayout
