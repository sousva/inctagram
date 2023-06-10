'use client'
import React, {useEffect} from 'react'
import {useSignUpConfirmationMutation} from 'redux/api/authAPI'
import {useRouter, useSearchParams} from 'next/navigation'
import {Loader} from 'common/components/Loader/Loader'
import {PATH} from 'app/path'

export default function Page() {
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
