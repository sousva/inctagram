'use client'

import React, {useState} from 'react'
import LogoutIcon from '../../assets/icons/logout.svg'
import {Button} from '../Button/Button'
import {Modal} from '../Modal/BaseModal'
import {ButtonWrapper, LogOutWrapper} from './LogOut.styled'
import {useLogOutMutation} from 'redux/api/authAPI'
import {SetAppNotificationAC} from '_app/store/appSlice'
import {useAppDispatch} from 'shared/hooks/reduxHooks'
import {signOut, useSession} from 'next-auth/react'

export const LogOut = () => {
    const dispatch = useAppDispatch()
    const {data} = useSession()
    const [showModal, setShowModal] = useState(false)
    const [logOut] = useLogOutMutation()

    const onLogOut = async () => {
        await signOut()
        await logOut()
            .unwrap()
            .then(() => {
                dispatch(SetAppNotificationAC({notifications: {type: 'success', message: 'See you soon!! Bye-bye))'}}))
            })
            .catch(error => {
                console.log(error)
                dispatch(
                    SetAppNotificationAC({
                        notifications: {type: 'error', message: 'Something went wrong, Try again please!!'},
                    })
                )
            })
        setShowModal(false)
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
                        Do you really want to log out of your account
                        <br /> <span>{data?.user.email}</span>?
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
