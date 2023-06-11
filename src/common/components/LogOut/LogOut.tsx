'use client'
import {Button} from '../Button/Button'
import {useState} from 'react'
import {ButtonWrapper, LogOutWrapper} from './LogOut.styled'
import {Modal} from '../Modal/BaseModal'
import {useLogOutMutation} from 'redux/api/authAPI'
import {PATH} from 'app/path'
import {SetAppNotificationAC} from 'redux/appSlice'
import {useRouter} from 'next/navigation'
import {useAppDispatch} from 'common/hooks/reduxHooks'

export const LogOut = () => {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useAppDispatch()

    const router = useRouter()

    const [logOut, {isSuccess, isError}] = useLogOutMutation()

    const onLogOut = async () => {
        await logOut()
            .unwrap()
            .then(() => {
                router.replace(PATH.LOGIN)
                setShowModal(false)
                dispatch(
                    SetAppNotificationAC({
                        notifications: {
                            type: 'success',
                            message: 'Logout completed successfully',
                        },
                    })
                )
            })
            .catch(error => {
                router.replace(PATH.LOGIN)
                setShowModal(false)
                dispatch(
                    SetAppNotificationAC({
                        notifications: {
                            type: 'error',
                            message: error.data.messages[0].message,
                        },
                    })
                )
            })
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <>
            <Button onClick={() => setShowModal(true)}>LOG OUT</Button>
            <Modal isOpen={showModal} title={'Log Out'} handleClose={handleCloseModal}>
                <LogOutWrapper>
                    <p>Are you really want to log out of your account {`'EMAP@EMAP.EMAP`}?</p>
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
