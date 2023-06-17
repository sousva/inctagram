import {BaseModalProps, Modal} from 'common/components/Modal/BaseModal'
import React, {ChangeEvent, useEffect, useState} from 'react'
import styled from 'styled-components'
import {InputFile} from 'common/components/InputFile/InputFile'
import AvatarEditor from 'react-avatar-editor'
import {ProfilePhotoModalFooter} from 'app/profile/profile-settings/Avatar/components/ProfilePhotoModalFooter'
import {EmptyAvatarPlaceholder} from 'app/profile/profile-settings/Avatar/components/EmptyAvatarPlaceholder'
import {useUserAvatarMutation} from 'redux/api/profileAPI'
import {SetAppNotificationAC} from 'redux/appSlice'
import {useAppDispatch} from 'common/hooks/reduxHooks'

export const ProfilePhotoModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    max-height: 504px;
    padding: 40px;
`

export const ProfilePhotoModal = (props: BaseModalProps) => {
    const dispatch = useAppDispatch()
    const [scale, setScale] = useState<string>('1.5')

    const [avatarFile, setAvatarFile] = useState<any>()
    const [preview, setPreview] = useState<any>()

    const [user, {isLoading}] = useUserAvatarMutation()

    useEffect(() => {
        if (!avatarFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(avatarFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [avatarFile])

    const handleChangePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) {
            setAvatarFile(undefined)
            return
        }
        setAvatarFile(e.target.files[0])
    }

    const handleClear = () => {
        setPreview('')
    }
    const handleSave = () => {
        const formData = new FormData()
        formData.append('file', avatarFile)

        user(formData)
            .unwrap()
            .then(() =>
                dispatch(
                    SetAppNotificationAC({
                        notifications: {type: 'success', message: 'Your Avatar was successfully uploaded'},
                    })
                )
            )

            .catch(error =>
                dispatch(
                    SetAppNotificationAC({notifications: {type: 'error', message: error.data.messages[0].message}})
                )
            )
    }
    return (
        <Modal title={props.title} isOpen={props.isOpen} handleClose={props.handleClose}>
            <ProfilePhotoModalWrapper>
                {preview && (
                    <>
                        <AvatarEditor
                            image={preview}
                            width={300}
                            height={300}
                            border={10}
                            borderRadius={150}
                            color={[255, 255, 255, 0.6]}
                            scale={+scale}
                            rotate={0}
                        />
                        <ProfilePhotoModalFooter
                            clearImagePreview={handleClear}
                            savePhoto={handleSave}
                            value={scale}
                            onChange={e => setScale(e.target.value)}
                        />
                    </>
                )}
                {!preview && (
                    <>
                        <EmptyAvatarPlaceholder />
                        <InputFile
                            title={'Select from Computer'}
                            onChange={handleChangePhoto}
                            accept={'image/png, image/jpeg'}
                            multiple={false}
                        />
                    </>
                )}
            </ProfilePhotoModalWrapper>
        </Modal>
    )
}
