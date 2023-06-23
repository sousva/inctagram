import React from 'react'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import {PATH} from 'app/path'

export default function Page() {
    const router = useRouter()
    const session = useSession()
    console.log(session)

    if (session.status === 'unauthenticated') {
        router.replace(PATH.LOGIN)
    }
    return <>home page</>
}
