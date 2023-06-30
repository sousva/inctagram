'use client'
import React, {useState} from 'react'
import {AuthContainer} from 'common/components/AuthContainer/AuthContainer'
import {Button} from 'common/components/Button/Button'
import Image from 'next/image'
import timeManagement from 'common/assets/pictures/timeManagement.png'
import {useResendConfirmationLinkMutation} from 'redux/api/authAPI'
import {Modal} from 'common/components/Modal/BaseModal'
import {SetAppNotificationAC} from 'redux/appSlice'
import {useAppDispatch} from 'common/hooks/reduxHooks'
import {useRouter, useSearchParams} from 'next/navigation'
import {Loader} from 'common/components/Loader/Loader'
import {PATH} from 'common/constant/PATH'
import {EmailResendWrapper} from 'common/styles/EmailResendPage'
import {RegistrationModalContent} from 'common/styles/RegistrationPage'

export default function Page() {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [resend, {isLoading}] = useResendConfirmationLinkMutation()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const email = useSearchParams().get('email') as string

    const handleModalClose = () => {
        setIsModalOpen(false)
        router.replace(PATH.LOGIN)
    }

    const handleResend = () => {
        resend({email})
            .unwrap()
            .then(() => setIsModalOpen(true))
            .catch(error =>
                dispatch(
                    SetAppNotificationAC({notifications: {type: 'error', message: error.data.messages[0].message}})
                )
            )
    }

    return (
        <AuthContainer>
            {isLoading && <Loader />}
            <EmailResendWrapper>
                <h1>Email verification link expired</h1>
                <p>Looks like the verification link has expired. Not to worry, we can send the link again</p>
                <Button onClick={handleResend} disabled={isLoading}>
                    Resend verification link
                </Button>
                <span>
                    <Image src={timeManagement} alt={'timeManagement picture'} />
                </span>
            </EmailResendWrapper>
            <Modal handleClose={handleModalClose} isOpen={isModalOpen} title={'Email sent'}>
                <RegistrationModalContent>
                    <div>
                        We have sent a link to confirm your email to <span>{email}</span>
                    </div>
                    <Button onClick={handleModalClose}>OK</Button>
                </RegistrationModalContent>
            </Modal>
        </AuthContainer>
    )
}
