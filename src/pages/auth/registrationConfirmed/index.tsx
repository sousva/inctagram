import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import congratulation from 'common/assets/pictures/congratulation.png'
import {AuthContainer} from 'common/components/AuthContainer/AuthContainer'
import {PATH} from 'common/constant/PATH'
import {ConfirmationPageWrapper} from 'common/styles/RegistrationConfirmPage'
import {getLayoutWithHeader} from 'common/Layouts/LayoutWithHeader'

export default function ConfirmedRegistrationPage() {
    return (
        <AuthContainer>
            <ConfirmationPageWrapper>
                <h1>Congratulations!</h1>
                <p>Your email has been confirmed</p>
                <Link href={PATH.LOGIN}>Sing In</Link>TODO
                <span>
                    <Image src={congratulation} alt={'congratulation'} />
                </span>
            </ConfirmationPageWrapper>
        </AuthContainer>
    )
}
ConfirmedRegistrationPage.getLayout = getLayoutWithHeader
