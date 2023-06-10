'use client'
import React from 'react'
import {ConfirmationPageWrapper} from 'app/auth/registrationConfirmed/styled'
import {Button} from 'common/components/Button/Button'
import Image from 'next/image'
import congratulation from 'common/assets/pictures/congratulation.png'
import {AuthContainer} from 'common/components/AuthContainer/AuthContainer'

export default function Page() {
    return (
        <AuthContainer>
            <ConfirmationPageWrapper>
                <h1>Congratulations!</h1>
                <p>Your email has been confirmed</p>
                <Button>Sing In</Button>
                <span>
                    <Image src={congratulation} alt={'congratulation'} />
                </span>
            </ConfirmationPageWrapper>
        </AuthContainer>
    )
}
