'use client'
import React from 'react'

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
