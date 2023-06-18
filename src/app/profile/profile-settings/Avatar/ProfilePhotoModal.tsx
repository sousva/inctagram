import {BaseModalProps, Modal} from 'common/components/Modal/BaseModal'
import React, {useState} from 'react'
import styled from 'styled-components'
import {InputFile} from 'common/components/InputFile/InputFile'
import AvatarEditor from 'react-avatar-editor'
import {ProfilePhotoModalFooter} from 'app/profile/profile-settings/Avatar/components/ProfilePhotoModalFooter'
import {EmptyAvatarPlaceholder} from 'app/profile/profile-settings/Avatar/components/EmptyAvatarPlaceholder'
import {useUploadAvatarMutation} from 'redux/api/profileAPI'
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
export const base64ToFile = (base64String: string, fileName: string) => {
    console.log('base64String', base64String)
    // Remove the data URL prefix (e.g., "data:image/jpeg;base64,")
    const base64Data = base64String.replace(/^data:image\/(png|jpeg|jpg);base64,/, '')

    // Convert the Base64 string to a Uint8Array
    const byteCharacters = atob(base64Data)
    const byteNumbers = new Array(byteCharacters.length)
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i)
    }
    const byteArray = new Uint8Array(byteNumbers)

    // Create a Blob object from the Uint8Array
    const blob = new Blob([byteArray], {type: 'image/jpeg'}) // Replace 'image/jpeg' with the appropriate MIME type if needed
    // Create a File object from the Blob
    const file = new File([blob], fileName, {type: blob.type})

    // Add the length property to the File object
    Object.defineProperty(file, 'length', {
        value: byteArray.length,
        writable: false,
        enumerable: true,
        configurable: true,
    })

    return file
}

export const ProfilePhotoModal = (props: BaseModalProps) => {
    const dispatch = useAppDispatch()
    const [user, {isLoading}] = useUploadAvatarMutation()
    let editor = ''
    const [picture, setPicture] = useState({
        img: '',
        zoom: '2',
        croppedImg: '',
    })

    const setEditorRef = (ed: any) => {
        editor = ed
    }

    const handleSave = () => {
        // @ts-ignore
        const canvasScaled = editor.getImageScaledToCanvas()
        const croppedImg = canvasScaled.toDataURL()
        setPicture({
            ...picture,
            img: '',
            croppedImg: croppedImg,
        })
        const file = base64ToFile(picture.croppedImg, 'file')

        const formData = new FormData()
        formData.append('formData', file)

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

    const handleChangePhoto = e => {
        let url = URL.createObjectURL(e.target.files[0])
        setPicture({
            ...picture,
            img: url,
        })
    }
    const handleClear = () => {
        setPicture({
            ...picture,
            img: '',
        })
    }

    return (
        <Modal title={props.title} isOpen={props.isOpen} handleClose={props.handleClose}>
            <ProfilePhotoModalWrapper>
                {picture.img && (
                    <>
                        <AvatarEditor
                            ref={setEditorRef}
                            image={picture.img}
                            width={300}
                            height={300}
                            border={10}
                            borderRadius={150}
                            color={[255, 255, 255, 0.6]}
                            scale={+picture.zoom}
                            rotate={0}
                        />
                        <ProfilePhotoModalFooter
                            clearImagePreview={handleClear}
                            savePhoto={handleSave}
                            value={picture.zoom}
                            onChange={e =>
                                setPicture({
                                    ...picture,
                                    zoom: e.target.value,
                                })
                            }
                        />
                    </>
                )}
                {!picture.img && (
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
// useEffect(() => {
//     if (!avatarFile) {
//         setPreview(undefined)
//         return
//     }
//     const objectUrl = URL.createObjectURL(avatarFile)
//     setPreview(objectUrl)
//
//     return () => URL.revokeObjectURL(objectUrl)
// }, [avatarFile])
//
// const handleChangePhoto = (e: ChangeEvent<HTMLInputElement>) => {
//     if (!e.target.files || e.target.files.length === 0) {
//         setAvatarFile(undefined)
//         return
//     }
//     setAvatarFile(e.target.files[0])
// }
//
// const handleClear = () => {
//     setPreview('')
// }
// const handleSave = () => {
//     const formData = new FormData()
//     formData.append('file', avatarFile)

// user(formData)
//     .unwrap()
//     .then(() =>
//         dispatch(
//             SetAppNotificationAC({
//                 notifications: {type: 'success', message: 'Your Avatar was successfully uploaded'},
//             })
//         )
//     )
//
//     .catch(error =>
//         dispatch(
//             SetAppNotificationAC({notifications: {type: 'error', message: error.data.messages[0].message}})
//         )
//     )
