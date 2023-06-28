'use client'

import React, {useState} from 'react'
import LogoutIcon from '../../assets/icons/logout.svg'
import {Button} from '../Button/Button'
import {Modal} from '../Modal/BaseModal'
import {ButtonWrapper, LogOutWrapper} from './LogOut.styled'
import {signOut, useSession} from 'next-auth/react'
import {PATH} from 'common/constant/PATH'

export const LogOut = () => {
    const [showModal, setShowModal] = useState(false)
    const session = useSession()
    const email = session.data ? session.data.user?.email : null

    const onLogOut = async () => {
        setShowModal(false)
        await signOut({callbackUrl: PATH.LOGIN})
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }
    return (
        <>
            <Button onClick={() => setShowModal(true)} variant={'isIcon'}>
                <LogoutIcon />
                Log Out
            </Button>
            <Modal isOpen={showModal} title={'Log Out'} handleClose={handleCloseModal}>
                <LogOutWrapper>
                    <p>
                        Do you really want to log out of your account <span>{email}</span>?
                    </p>
                    <ButtonWrapper>
                        <Button variant={'outlined'} onClick={onLogOut}>
                            Yes
                        </Button>
                        <Button onClick={handleCloseModal}>No</Button>
                    </ButtonWrapper>
                </LogOutWrapper>
            </Modal>
        </>
    )
}
