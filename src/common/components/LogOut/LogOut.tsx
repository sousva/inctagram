'use client'
import {Button} from '../Button/Button'
import {Modal} from '../Modal/Modal'
import {useState} from 'react'
import {ButtonWrapper, LogOutTitle, LogOutWrapper} from './LogOut.styled'
import CloseButton from 'common/assets/icons/close.svg'
import {IconButton} from '../IconButton/IconButton'

export const LogOut = () => {
    const [showModal, setShowModal] = useState(false)

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <>
            <Button onClick={() => setShowModal(true)}>LOG OUT</Button>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <LogOutWrapper>
                    <LogOutTitle>
                        <h4>Log Out</h4>
                        <IconButton onClick={handleCloseModal}>
                            <CloseButton />
                        </IconButton>
                    </LogOutTitle>
                    <p>Are you really want to log out of your account {`'EMAP@EMAP.EMAP`}?</p>
                    <ButtonWrapper>
                        <Button variant={'outlined'} onClick={handleCloseModal}>
                            Yes
                        </Button>
                        <Button onClick={handleCloseModal}>No</Button>
                    </ButtonWrapper>
                </LogOutWrapper>
            </Modal>
        </>
    )
}
