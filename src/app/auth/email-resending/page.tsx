'use client'
import React, {useState} from 'react'
import {AuthContainer} from 'common/components/AuthContainer/AuthContainer'
import styled from 'styled-components'
import {Button} from 'common/components/Button/Button'
import Image from 'next/image'
import timeManagement from 'common/assets/pictures/timeManagement.png'
import {useResendConfirmationLinkMutation} from 'redux/api/authAPI'
import {RegistrationModalContent} from 'app/auth/registration/styled'
import {Modal} from 'common/components/Modal/BaseModal'
import {SetAppNotificationAC} from 'redux/appSlice'
import {useAppDispatch} from 'common/hooks/reduxHooks'
import {useRouter} from 'next/navigation'
import {Loader} from 'common/components/Loader/Loader'

const Wrapper = styled.div`
    h1 {
        font-size: 20px;
        font-weight: 700;
        color: ${props => props.theme.textColor};
    }
    p {
        font-size: 16px;
        font-weight: 400;
        color: ${props => props.theme.textColor};
    }

    span {
        width: 100%;
        max-width: 400px;

        img {
            width: 100%;
            height: auto;
        }
    }
`
export default function Page() {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [resend, {isLoading}] = useResendConfirmationLinkMutation()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleModalClose = () => {
        setIsModalOpen(false)
        router.replace('/auth/login')
    }

    const emailValue = 'gali@libero.it' //TODO  fix hardcore email

    const handleResend = () => {
        resend({email: emailValue})
            .unwrap()
            .then(payload => setIsModalOpen(true))
            .catch(error =>
                dispatch(
                    SetAppNotificationAC({notifications: {type: 'error', message: error.data.messages[0].message}})
                )
            )
    }
    return (
        <AuthContainer>
            {isLoading && <Loader />}
            <Wrapper>
                <h1>Email verification link expired</h1>
                <p>Looks like the verification link has expired. Not to worry, we can send the link again</p>
                <Button onClick={handleResend} disabled={isLoading}>
                    Resend verification link
                </Button>
                <span>
                    <Image src={timeManagement} alt={'timeManagement picture'} />
                </span>
            </Wrapper>
            <Modal handleClose={handleModalClose} isOpen={isModalOpen} title={'Email sent'}>
                <RegistrationModalContent>
                    <div>
                        We have sent a link to confirm your email to <span>{emailValue}</span>
                    </div>
                    <Button onClick={handleModalClose}>OK</Button>
                </RegistrationModalContent>
            </Modal>
        </AuthContainer>
    )
}
