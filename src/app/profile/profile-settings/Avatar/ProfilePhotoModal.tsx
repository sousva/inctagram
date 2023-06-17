import {BaseModalProps, Modal} from 'common/components/Modal/BaseModal'
import React, {ChangeEvent, useRef, useState} from 'react'
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
    const [avatarFile, setAvatarFile] = useState<File | string>()
    const [scale, setScale] = useState<string>('1.5')
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string>()

    const [user, {isLoading}] = useUserAvatarMutation()
    const editor = useRef(null)
    const handleChangePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        const file = e.target.files[0]
        let fileReader,
            isCancel = false
        if (file) {
            fileReader = new FileReader()
            fileReader.onload = e => {
                // @ts-ignore
                const {result} = e.target
                if (result && !isCancel) {
                    setImagePreviewUrl(result)
                }
            }
            fileReader.readAsDataURL(file)
        }
    }
    const handleClear = () => {
        setImagePreviewUrl('')
    }
    const handleSave = () => {
        // @ts-ignore
        const canvasScaled = editor.current.getImageScaledToCanvas()
        user({avatars: canvasScaled})
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
                {imagePreviewUrl && (
                    <>
                        <AvatarEditor
                            ref={editor}
                            image={imagePreviewUrl}
                            width={250}
                            height={250}
                            border={10}
                            borderRadius={150}
                            color={[255, 255, 255, 0.6]} // RGBA
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
                {!imagePreviewUrl && (
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

//https://blog.logrocket.com/using-filereader-api-preview-images-react/
