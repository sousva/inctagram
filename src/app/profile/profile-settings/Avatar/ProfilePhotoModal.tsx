import {BaseModalProps, Modal} from 'common/components/Modal/BaseModal'
import React from 'react'
import styled from 'styled-components'
import {Button} from 'common/components/Button/Button'

export const ProfilePhotoModalWrapper = styled.form``
export const InputFile = styled.input``

export const ProfilePhotoModal = (props: BaseModalProps) => {
    return (
        <Modal title={props.title} isOpen={props.isOpen} handleClose={props.handleClose}>
            <ProfilePhotoModalWrapper>
                <input type='file' />
                <Button>Select from Computer</Button>
            </ProfilePhotoModalWrapper>
        </Modal>
    )
}
