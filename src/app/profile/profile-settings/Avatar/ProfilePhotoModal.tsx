import {BaseModalProps, Modal} from 'common/components/Modal/BaseModal'
import React, {ChangeEvent, useState} from 'react'
import styled from 'styled-components'
import {InputFile} from 'common/components/InputFile/InputFile'
import EmptyAvatarIcon from '../../../../common/assets/icons/emptyAvatar.svg'
import AvatarEditor from 'react-avatar-editor'
import {Button} from 'common/components/Button/Button'

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
    // const [selectedFile, setSelectedFile] = useState<File | string>('https://picsum.photos/200/300')
    const [scale, setScale] = useState<string>('1.5')

    const [imagePreviewUrl, setImagePreviewUrl] = useState<any>()

    const handleChangePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        const file = e.target.files[0]
        let fileReader,
            isCancel = false
        if (file) {
            fileReader = new FileReader()
            fileReader.onload = e => {
                const {result} = e.target
                if (result && !isCancel) {
                    setImagePreviewUrl(result)
                }
            }
            fileReader.readAsDataURL(file)
        }
        // setImagePreviewUrl(url)
    }
    return (
        <Modal title={props.title} isOpen={props.isOpen} handleClose={props.handleClose}>
            <ProfilePhotoModalWrapper>
                {imagePreviewUrl && (
                    <AvatarEditor
                        image={imagePreviewUrl}
                        width={250}
                        height={250}
                        border={10}
                        borderRadius={150}
                        color={[255, 255, 255, 0.6]} // RGBA
                        scale={+scale}
                        rotate={0}
                    />
                )}
                {!imagePreviewUrl && (
                    <div>
                        <EmptyAvatarIcon />
                    </div>
                )}
                {/*<input type='range' value={scale} onChange={e => setScale(e.target.value)} />*/}
                {!imagePreviewUrl && (
                    <InputFile
                        title={'Select from Computer'}
                        onChange={handleChangePhoto}
                        accept={'image/png, image/jpeg'}
                        multiple={false}
                    />
                )}
                {imagePreviewUrl && (
                    <>
                        <Button>Save</Button>
                        <input
                            type='range'
                            value={scale}
                            onChange={e => setScale(e.target.value)}
                            min={1}
                            max={2}
                            step='0.1'
                        />
                    </>
                )}
            </ProfilePhotoModalWrapper>
        </Modal>
    )
}

//https://blog.logrocket.com/using-filereader-api-preview-images-react/
