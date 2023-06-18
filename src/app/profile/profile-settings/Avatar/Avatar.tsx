import React, {useState} from 'react'
import {Button} from 'common/components/Button/Button'
import {AvatarFormWrapper} from 'app/profile/profile-settings/Avatar/styled'
import EmptyAvatarIcon from './../../../../common/assets/icons/emptyAvatar.svg'
import {ProfilePhotoModal} from 'app/profile/profile-settings/Avatar/ProfilePhotoModal'
import Image from 'next/image'
import styled from 'styled-components'
import {IconButton} from 'common/components/IconButton/IconButton'
import DeleteAvatarIcon from '../../../../common/assets/icons/deleteAvatar.svg'
import {useDeleteAvatarMutation} from 'redux/api/profileAPI'
import {SetAppNotificationAC} from 'redux/appSlice'
import {useAppDispatch} from 'common/hooks/reduxHooks'
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
            <UserAvatar />
            <Button type='button' variant={'outlined'} onClick={handleModalOpen}>
                Add a Profile Photo
            </Button>
            <ProfilePhotoModal title={'Add a Profile Photo'} isOpen={isModalOpen} handleClose={handleModalClose} />
        </AvatarFormWrapper>
    )
}

const Wrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 192px;
    border-radius: 50%;
    margin-bottom: 30px;
    background-color: ${props =>
        props.theme.name === 'dark' ? props.theme.palette.dark['500'] : props.theme.palette.light['500']};

    .avatar {
        position: relative;

        button {
            position: absolute;
            top: 0;
            right: 0;
        }
    }
`

export const UserAvatar = () => {
    const dispatch = useAppDispatch()
    const [imgUrl, setImgUrl] = useState(
        'https://storage.yandexcloud.net/users-inctagram/users/248/avatar/b07e8938-b97e-458f-872f-61f23e427079-images-192x192'
    )

    const [deleteAvatar, {isLoading}] = useDeleteAvatarMutation()
    const handleDeleteAvatar = () => {
        deleteAvatar({})
            .unwrap()
            .then(() => {
                setImgUrl('')
                dispatch(
                    SetAppNotificationAC({
                        notifications: {type: 'success', message: 'Your Avatar was successfully removed'},
                    })
                )
            })
            .catch(error =>
                dispatch(
                    SetAppNotificationAC({notifications: {type: 'error', message: error.data.messages[0].message}})
                )
            )
    }
    return (
        <Wrapper>
            {imgUrl ? (
                <div className={'avatar'}>
                    <Image src={imgUrl} alt={'imgUrl'} width={192} height={192} />
                    <IconButton onClick={handleDeleteAvatar} disabled={isLoading}>
                        <DeleteAvatarIcon />
                    </IconButton>
                </div>
            ) : (
                <EmptyAvatarIcon />
            )}
        </Wrapper>
    )
}
