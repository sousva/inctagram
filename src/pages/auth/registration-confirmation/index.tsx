'use client'

import React, {useEffect} from 'react'
import {useSignUpConfirmationMutation} from 'redux/api/authAPI'
import {useRouter, useSearchParams} from 'next/navigation'
import {Loader} from 'common/components/Loader/Loader'
import {PATH} from 'common/constant/PATH'
import {getLayoutWithHeader} from 'common/Layouts/LayoutWithHeader'

export default function ConfirmationPage() {
    const router = useRouter()
    const code = useSearchParams().get('code') as string
    const email = useSearchParams().get('email') as string

    const [signUpConfirmation] = useSignUpConfirmationMutation()

    const handleConfirm = async () => {
        await signUpConfirmation({confirmationCode: code})
            .unwrap()
            .then(() => router.replace(PATH.REGISTRATION_CONFIRMED))
            .catch(() => router.replace(`${PATH.EXPIRED_LINK}?email=${email}`))
    }
    useEffect(() => {
        handleConfirm()
    }, [])

    return <Loader />
}

ConfirmationPage.getLayout = getLayoutWithHeader
