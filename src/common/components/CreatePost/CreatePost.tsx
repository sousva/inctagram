import {Modal} from 'common/components/Modal/BaseModal'
import React, {ChangeEvent, useEffect, useRef, useState} from 'react'
import CreateIcon from 'common/assets/icons/create.svg'

import {useAppDispatch} from 'common/hooks/reduxHooks'
import {
    ButtonWrapper,
    CanvasContainer,
    CreatePostWrapper,
    EditorWrapper,
    EmptyImageWrapper,
    ModalContentWrapper,
} from './styled'
import EmptyIcon from '../../assets/icons/emptyAvatar.svg'
import {Button} from '../Button/Button'
import {InputFile} from 'common/components/InputFile/InputFile'
import {useUploadImageMutation} from '../../../redux/api/postsAPI'
import {SetAppNotificationAC} from '../../../redux/appSlice'
import AvatarEditor from 'react-avatar-editor'
import {EditPhoto} from './components/EditPhoto/EditPhoto'

type StepsType = 'select' | 'crop' | 'resize' | 'filters'

export const CreatePost = () => {
    const [step, setStep] = useState<StepsType>('select')
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const [post, {isLoading, isError}] = useUploadImageMutation()
    const [editor, setEditor] = useState<AvatarEditor | null>(null)
    const [picture, setPicture] = useState({
        img: '',
        zoom: '1',
        croppedImg: '',
    })

    const handleSave = () => {
        // if (editor) {
        //     const canvas = editor.getImage()
        //     canvas.toBlob((blob: any) => {
        //         const formData = new FormData()
        //
        //         formData.append('file', blob)
        //         // @ts-ignore
        //         post(formData)
        //             .unwrap()
        //             .then(() => {
        //                 dispatch(
        //                     SetAppNotificationAC({
        //                         notifications: {type: 'success', message: 'Your Avatar was successfully uploaded'},
        //                     })
        //                 )
        //             })
        //
        //             .catch(error => {
        //                 console.log(error)
        //                 dispatch(
        //                     SetAppNotificationAC({
        //                         notifications: {type: 'error', message: error.message},
        //                     })
        //                 )
        //             })
        //     })
        // }
    }

    const handleCreatePost = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        let url = URL.createObjectURL(e.target.files[0])
        console.log(e.target.files)
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

    const handleClose = () => {
        setIsOpen(false)
        handleClear()
    }

    const handleZoom = (e: ChangeEvent<HTMLInputElement>) => {
        setPicture({
            ...picture,
            zoom: e.target.value,
        })
    }

    const setEditorRef = (ref: AvatarEditor | null) => {
        setEditor(ref)
    }

    const [width, setWidth] = useState(485)
    const [height, setHeight] = useState(465)
    const handleResize = (width: number, height: number) => {
        setWidth(width)
        setHeight(height)
    }
    return (
        <>
            <CreatePostWrapper>
                <li onClick={() => setIsOpen(true)}>
                    <CreateIcon />
                    Create
                </li>
            </CreatePostWrapper>
            <Modal title={'Add Photo'} isOpen={isOpen} handleClose={handleClose}>
                <ModalContentWrapper>
                    {picture.img.length ? (
                        <EditorWrapper>
                            <CanvasContainer width={`${width}`} height={`${height}`}>
                                <AvatarEditor
                                    ref={setEditorRef}
                                    image={picture.img}
                                    width={width}
                                    height={height}
                                    scale={+picture.zoom}
                                    disableHiDPIScaling={true}
                                />
                            </CanvasContainer>
                        </EditorWrapper>
                    ) : (
                        <EmptyImageWrapper>
                            <EmptyIcon />
                        </EmptyImageWrapper>
                    )}
                    {!picture.img.length ? (
                        <ButtonWrapper>
                            <InputFile
                                title={'Select from Computer'}
                                onChange={handleCreatePost}
                                accept={'image/png, image/jpeg'}
                                multiple={false}
                            />
                            <Button variant={'outlined'}>Open Draft</Button>
                        </ButtonWrapper>
                    ) : (
                        <EditPhoto
                            valueZoom={picture.zoom}
                            width={width}
                            height={height}
                            onChangeResize={handleResize}
                            onChangeZoom={handleZoom}
                        />
                    )}
                </ModalContentWrapper>
            </Modal>
        </>
    )
}
