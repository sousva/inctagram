'use client'
import React, {useEffect} from 'react'
import {useSearchParams} from 'next/navigation'
import {useSignUpConfirmationMutation} from '../../../redux/authAPI'

export default function Page() {
    const searchParams = useSearchParams()

    const [signUpConfirmation] = useSignUpConfirmationMutation()

    useEffect(() => {
        const token = searchParams.get('code')
        // @ts-ignore
        signUpConfirmation(token)
        console.log(token)
    }, [])

    return <>registration confirmation</>
}
