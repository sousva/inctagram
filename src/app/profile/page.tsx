'use client'
import React from 'react'
import {useSession} from 'next-auth/react'

export default function Page() {
    const data = useSession()
    console.log(data)
    return <>home page</>
}
