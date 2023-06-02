'use client'
import React, {useEffect} from 'react'
import {useSearchParams} from 'next/navigation'
import {useSignUpConfirmationMutation} from '../../../redux/authAPI'
import {useRouter} from 'next/router'

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

    return <>registration confirmation</>
}
