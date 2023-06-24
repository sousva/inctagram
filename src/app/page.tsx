import React from 'react'
import {authMe} from 'lib/server-api/server-api'
import {getServerSession} from 'next-auth'

async function getData() {
    const res = await authMe()

    const session = await getServerSession()
    console.log(session)
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default function Page() {
    return (
        <div>
            <h1>...Loading</h1>
        </div>
    )
}
