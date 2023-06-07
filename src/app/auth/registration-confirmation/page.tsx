'use client'
import React from 'react'
import {Button} from 'common/components/Button/Button'
import Image from 'next/image'
import congratulation from 'common/assets/pictures/congratulation.png'
import {AuthContainer} from 'common/components/AuthContainer/AuthContainer'
import {ConfirmationPageWrapper} from 'app/auth/registration-confirmation/confirmation.styled'

export default function Page({params}: {params: {code: string}}) {
    // const searchParams = useSearchParams()

    const code = params.code
    console.log(code)
    //const [signUpConfirmation] = useSignUpConfirmationMutation()

    // useEffect(() => {
    //     if (code) {
    //         signUpConfirmation({confirmationCode: code})
    //     }
    // }, [])

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
