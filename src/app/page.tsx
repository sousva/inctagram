'use client'
import React from 'react'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import {PATH} from 'app/path'

const Page = () => {
    const {data} = useSession()
    const router = useRouter()
    if (data?.user.name) {
        router.push(PATH.HOME)
    } else {
        router.push(PATH.LOGIN)
    }
    return <div>loading....</div>
}
export default Page
