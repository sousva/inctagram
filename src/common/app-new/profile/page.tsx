'use client'
import React from 'react'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import {PATH} from 'app/path'

// const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string
//
// async function authMe() {
//     const res = await fetch(`${baseURL}/auth/me`, {
//         method: 'GET',
//         credentials: 'include',
//         headers: {},
//     })
//
//     return
// }

export default function Page() {
    const router = useRouter()
    const session = useSession()
    console.log(session)

    // if (session.status === 'loading') {
    //     return <p>progress...</p>
    // }
    if (session.status === 'unauthenticated') {
        router.replace(PATH.LOGIN)
    }
    return <>home page</>
}
