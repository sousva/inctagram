'use client'
import {PATH} from 'app/path'
import Link from 'next/link'
import React from 'react'
import {ConfirmationPageWrapper} from 'app/auth/registrationConfirmed/styled'
import {Button} from 'common/components/Button/Button'
import Image from 'next/image'
import congratulation from '@pictures/congratulation.png'
import {AuthContainer} from 'common/components/AuthContainer/AuthContainer'

export default function Page() {
    return (
        <AuthContainer>
            <ConfirmationPageWrapper>
                <h1>Congratulations!</h1>
                <p>Your email has been confirmed</p>
                <Link href={PATH.LOGIN}>
                    <Button>Sing In</Button>
                </Link>
                <span>
                    <Image src={congratulation} alt={'congratulation'} />
                </span>
            </ConfirmationPageWrapper>
        </AuthContainer>
    )
}
