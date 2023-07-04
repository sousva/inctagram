import React from 'react'
import {getHomeLayout} from 'common/Layouts/HomeLayout'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import {PATH} from 'common/constant/PATH'

export default function Home() {
    const {status} = useSession()
    const router = useRouter()

    if (status === 'unauthenticated') {
        router.push(PATH.LOGIN)
    }
    return <div> Home page</div>
}

Home.getLayout = getHomeLayout
