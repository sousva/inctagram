import {BaseModalProps, Modal} from 'common/components/Modal/BaseModal'
import React, {ChangeEvent, useState} from 'react'
import styled from 'styled-components'
import {InputFile} from 'common/components/InputFile/InputFile'
import EmptyAvatarIcon from '../../../../common/assets/icons/emptyAvatar.svg'
import AvatarEditor from 'react-avatar-editor'

export const ProfilePhotoModalWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    max-height: 504px;
    padding: 40px 0;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 222px;
        height: 228px;

        margin-bottom: 30px;
        background-color: ${props =>
            props.theme.name === 'dark' ? props.theme.palette.dark['500'] : props.theme.palette.light['500']};
    }
`

export const ProfilePhotoModal = (props: BaseModalProps) => {
    const [selectedFile, setSelectedFile] = useState<File | string>('https://picsum.photos/200/300')
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string | undefined | ArrayBuffer | null>()

    const handleChangePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        const files = e.target.files[0]
        // setSelectedFile(files.name)
        setImagePreviewUrl(files.name)
        console.log(files)
    }
    return (
        <Modal title={props.title} isOpen={props.isOpen} handleClose={props.handleClose}>
            <ProfilePhotoModalWrapper>
                {imagePreviewUrl && (
                    <AvatarEditor
                        image={selectedFile}
                        width={250}
                        height={250}
                        border={0}
                        color={[255, 255, 255, 0.6]} // RGBA
                        scale={1.2}
                        rotate={0}
                    />
                )}
                {!imagePreviewUrl && (
                    <div>
                        <EmptyAvatarIcon />
                    </div>
                )}

                <InputFile
                    title={'Select from Computer'}
                    onChange={handleChangePhoto}
                    accept={'image/png, image/jpeg'}
                />
            </ProfilePhotoModalWrapper>
        </Modal>
    )
}
