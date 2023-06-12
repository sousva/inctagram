'use client'
import React from 'react'
import {HomePageStyled} from 'app/styled'
import {Button} from 'common/components/Button/Button'
import Link from 'next/link'
import {PATH} from 'app/path'

export default function Page() {
    return (
        <HomePageStyled>
            <h1>Home Page</h1>
            <Link href={PATH.PROFILE_SETTINGS}>
                <Button variant={'contained'}>Profile Settings</Button>
            </Link>
        </HomePageStyled>
    )
}
