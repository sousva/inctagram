import React from 'react'
import Link from 'next/link'
import {PATH} from 'common/constant/PATH'
import {getHomeLayout} from 'common/Layouts/HomeLayout'

export default function MyProfilePage() {
    return (
        <>
            My Profile page <Link href={PATH.PROFILE_SETTINGS}> Profile Settings</Link>
        </>
    )
}
MyProfilePage.getLayout = getHomeLayout
