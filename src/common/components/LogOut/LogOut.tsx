'use client'
import {PATH} from 'app/path'
import {useAppDispatch, useAppSelector} from 'common/hooks/reduxHooks'
import {saveLocalStorage} from 'lib/LocalStorage/LocalStorage'
import {useRouter} from 'next/navigation'
import React, {useState} from 'react'
import {useLogOutMutation} from 'redux/api/authAPI'
import {SetAppNotificationAC} from 'redux/appSlice'
import LogoutIcon from '../../assets/icons/logout.svg'
import {Button} from '../Button/Button'
import {Modal} from '../Modal/BaseModal'
import {ButtonWrapper, LogOutWrapper} from './LogOut.styled'
import {signOut} from 'next-auth/react'

export const LogOut = () => {
    const [showModal, setShowModal] = useState(false)
    const {email} = useAppSelector(state => state.userAuth)
    const dispatch = useAppDispatch()

    const router = useRouter()

    const [logOut, {isSuccess, isError}] = useLogOutMutation()

    const onLogOut = async () => {
        await signOut()
        // await logOut()
        //     .unwrap()
        //     .then(() => {
        //         router.replace(PATH.LOGIN)
        //         saveLocalStorage({accessToken: ''})
        //         setShowModal(false)
        //         dispatch(
        //             SetAppNotificationAC({
        //                 notifications: {
        //                     type: 'success',
        //                     message: 'Log-Out completed successfully',
        //                 },
        //             })
        //         )
        //     })
        //     .catch(error => {
        //         router.replace(PATH.LOGIN)
        //         setShowModal(false)
        //         dispatch(
        //             SetAppNotificationAC({
        //                 notifications: {
        //                     type: 'error',
        //                     message: error.data.messages[0].message,
        //                 },
        //             })
        //         )
        //     })
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
                    <p>Do you really want to log out of your account {email}?</p>
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
