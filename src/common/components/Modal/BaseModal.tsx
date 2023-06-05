import {ReactNode, useEffect} from 'react'
import {ReactPortal} from 'common/components/Modal/ReactPortal'

type Props = {
    children: ReactNode
    isOpen: boolean
    handleClose: () => void
}
export const Modal = ({children, isOpen, handleClose}: Props) => {
    useEffect(() => {
        const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === 'Escape' ? handleClose() : null)
        document.body.addEventListener('keydown', closeOnEscapeKey)
        return () => {
            document.body.removeEventListener('keydown', closeOnEscapeKey)
        }
    }, [handleClose])

    if (!isOpen) return null

    return (
        <ReactPortal wrapperId='react-portal-modal-container'>
            <div className='modal'>
                <button onClick={handleClose} className='close-btn'>
                    Close
                </button>
                <div className='modal-content'>{children}</div>
            </div>
        </ReactPortal>
    )
}
