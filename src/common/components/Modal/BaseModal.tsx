import React, {ReactNode, useEffect} from 'react'
import {ReactPortal} from 'common/components/Modal/ReactPortal'
import styled from 'styled-components'
import {IconButton} from 'common/components/IconButton/IconButton'
import CloseIconWhite from './../../assets/icons/closeWhite.svg'
import CloseIconDark from './../../assets/icons/closeBlack.svg'
import {useAppSelector} from 'common/hooks/reduxHooks'

const ModalWrapper = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 999;

    &.open {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
    }
`
const ModalContent = styled.div`
    padding: 12px 24px;
    background-color: ${props => props.theme.palette.dark['300']};
    width: 378px;
    overflow: auto;
    box-shadow: 0 0 70px 10px #000;
    border: 1px solid ${props => props.theme.palette.dark['100']};
    transform: scale(0.5);
    color: ${props => props.theme.textColor};
    transition: 1s linear;

    &.open {
        transform: scale(1);
        transition: 1s linear;
    }
  
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: inherit;
      margin-bottom: 20px;
      font-weight: 700;
      font-size: 20px;
      padding-bottom: 12px;
      border-bottom: 1px solid ${props =>
          props.theme.name === 'dark' ? props.theme.palette.dark['100'] : props.theme.palette.light['100']};
`
type Props = {
    children: ReactNode
    isOpen: boolean
    handleClose: () => void
    title: string
}
export const Modal = ({children, isOpen, handleClose, title}: Props) => {
    const theme = useAppSelector(state => state.app.theme)
    const handleCloseModal = () => {
        document.body.classList.remove('isModalOpen')
        handleClose()
    }
    const onModalClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
    }

    isOpen && document.body.classList.add('isModalOpen')

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
            <ModalWrapper className={isOpen && 'open'} onClick={onModalClick}>
                <ModalContent className={isOpen && 'open'}>
                    <div className={'header'}>
                        {title}
                        <IconButton onClick={handleCloseModal}>
                            {theme === 'dark' ? <CloseIconWhite /> : <CloseIconDark />}
                        </IconButton>
                    </div>
                    {children}
                </ModalContent>
            </ModalWrapper>
        </ReactPortal>
    )
}
