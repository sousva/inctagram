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
import {Loader} from 'common/components/Loader/Loader'

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
    const [avatar, {isLoading}] = useUploadAvatarMutation()
    const [editor, setEditor] = useState<AvatarEditor | null>(null)
    const [picture, setPicture] = useState({
        img: '',
        zoom: '2',
        croppedImg: '',
    })

    const handleSave = () => {
        if (editor) {
            const canvas = editor.getImage()

            canvas.toBlob((blob: any) => {
                const formData = new FormData()

                formData.append('file', blob)

                avatar(formData)
                    .unwrap()
                    .then(() => {
                        props.handleClose()
                        dispatch(
                            SetAppNotificationAC({
                                notifications: {type: 'success', message: 'Your Avatar was successfully uploaded'},
                            })
                        )
                    })

                    .catch(error =>
                        dispatch(
                            SetAppNotificationAC({
                                notifications: {type: 'error', message: error.data.messages[0].message},
                            })
                        )
                    )
            })
        }
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
            {isLoading && <Loader />}
            <ProfilePhotoModalWrapper>
                {picture.img && (
                    <>
                        <AvatarEditor
                            ref={ref => {
                                setEditor(ref)
                            }}
                            image={picture.img}
                            width={192}
                            height={192}
                            border={50}
                            borderRadius={100}
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
