import React, {useState} from 'react'
import {Button} from 'common/components/Button/Button'
import {AvatarFormWrapper} from 'app/profile/profile-settings/Avatar/styled'
import EmptyAvatarIcon from './../../../../common/assets/icons/emptyAvatar.svg'
import {ProfilePhotoModal} from 'app/profile/profile-settings/Avatar/ProfilePhotoModal'

export const Avatar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleModalClose = () => {
        setIsModalOpen(false)
    }
    const handleModalOpen = () => {
        setIsModalOpen(true)
    }
    return (
        <AvatarFormWrapper>
            <span>
                <EmptyAvatarIcon />
            </span>
            <Button type='button' variant={'outlined'} onClick={handleModalOpen}>
                Add a Profile Photo
            </Button>
            <ProfilePhotoModal title={'Add a Profile Photo'} isOpen={isModalOpen} handleClose={handleModalClose} />
        </AvatarFormWrapper>
    )
}
