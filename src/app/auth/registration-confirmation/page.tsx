'use client'
import React, {useEffect} from 'react'
import {Button} from 'common/components/Button/Button'
import Image from 'next/image'
import congratulation from 'common/assets/pictures/congratulation.png'
import {AuthContainer} from 'common/components/AuthContainer/AuthContainer'
import {ConfirmationPageWrapper} from 'app/auth/registration-confirmation/confirmation.styled'
import {useSignUpConfirmationMutation} from 'redux/api/authAPI'
import {useRouter, useSearchParams} from 'next/navigation'
import {Loader} from 'common/components/Loader/Loader'
import {PATH} from 'app/path'

export default function Page() {
    const code = useSearchParams().get('code') as string
    const router = useRouter()

    const [signUpConfirmation] = useSignUpConfirmationMutation()

    const foo = async () => {
        await signUpConfirmation({confirmationCode: code})
            .unwrap()
            .then(() => {
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
            })
            .catch(() => router.push(PATH.EXPIRED_LINK))
    }
    useEffect(() => {
        foo()
    }, [])

    return <Loader />
}
