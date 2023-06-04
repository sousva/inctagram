'use client'

import {MouseEvent, ReactNode, useEffect, useState} from 'react'
import {ModalWrapper} from './Modal.styled'
import {createPortal} from 'react-dom'

type PropsType = {
    show: boolean
    onClose: () => void
    children: ReactNode
}

export const Modal = (props: PropsType) => {
    const [mountingModal, setMountingModal] = useState(false)
    const {children, show, onClose} = props
    useEffect(() => {
        setMountingModal(true)
    }, [])

    const handleCloseModal = (e: MouseEvent) => {
        onClose()
    }

    const modalContent = show ? (
        <ModalWrapper onClick={handleCloseModal}>
            <div onClick={e => e.stopPropagation()}>{children}</div>
        </ModalWrapper>
    ) : null

    if (mountingModal) {
        return createPortal(modalContent, document.getElementById('modal') as HTMLElement)
    } else {
        return null
    }
}
