import {Modal} from 'common/components/Modal/BaseModal'
import React, {ChangeEvent, useRef, useState} from 'react'
import CreateIcon from 'common/assets/icons/create.svg'

import {useAppDispatch} from 'common/hooks/reduxHooks'
import {CanvasContainer, CreatePostWrapper, EditorWrapper, EmptyImageWrapper, ModalContentWrapper} from './styled'
import EmptyIcon from '../../assets/icons/emptyAvatar.svg'
import {Button} from '../Button/Button'
import {InputFile} from 'common/components/InputFile/InputFile'
import {useUploadImageMutation} from '../../../redux/api/postsAPI'
import {SetAppNotificationAC} from '../../../redux/appSlice'
import AvatarEditor from 'react-avatar-editor'
import {EditPhoto} from './components/EditPhoto/EditPhoto'
import {SelectWrapper} from './components/EditorButtons/styled'
import {EditorButtons} from './components/EditorButtons/EditorButtons'
import {SelectPhoto} from './components/SelectPhoto/SelectPhoto'
import {PresetFilters} from './components/PresetFilters/PresetFilters'

export type StepsType = 'select' | 'resize' | 'filters'

export const CreatePost = () => {
    const dispatch = useAppDispatch()
    const [post, {isLoading, isError}] = useUploadImageMutation()
    const [editor, setEditor] = useState<AvatarEditor | null>(null)
    const [step, setStep] = useState<StepsType>('select')
    const [isOpen, setIsOpen] = useState(false)
    const [width, setWidth] = useState(485)
    const [height, setHeight] = useState(465)
    const [filter, setFilter] = useState('')
    const [picture, setPicture] = useState({
        img: '',
        zoom: '1',
    })

    const handleResize = (width: number, height: number) => {
        setWidth(width)
        setHeight(height)
    }

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
        //                 console.log('ОТРАБОТАЛ')
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

        setPicture({
            ...picture,
            img: url,
        })

        setStep('resize')
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

    const onChangeStep = (step: StepsType) => {
        if (step === 'select') {
            handleClear()
        }

        setStep(step)
    }
    /*
     * Отображает текущие данне о картинке:
     * backgroundColor: undefined
     * height: number
     * width: number
     * resource: img(alt and etc...)
     *
     * x: number
     * y: number
     * */
    const imgInfo = (IMG_INFO: any) => {
        console.log(IMG_INFO)
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
                    <EditorWrapper>
                        {picture.img.length ? (
                            <>
                                <CanvasContainer width={width} height={height}>
                                    <AvatarEditor
                                        ref={setEditorRef}
                                        image={picture.img}
                                        width={width}
                                        height={height}
                                        scale={+picture.zoom}
                                        border={[10, 20]}
                                        style={{
                                            filter: filter,
                                        }}
                                        disableHiDPIScaling={true}
                                        onLoadSuccess={IMG_INFO => imgInfo(IMG_INFO)}
                                    />
                                </CanvasContainer>
                                {step === 'filters' && (
                                    <PresetFilters
                                        picture={picture.img}
                                        handleSave={handleSave}
                                        setFilter={setFilter}
                                    />
                                )}
                            </>
                        ) : (
                            <EmptyImageWrapper>
                                <EmptyIcon />
                            </EmptyImageWrapper>
                        )}
                        {step === 'select' ? (
                            <SelectPhoto handleCreatePost={handleCreatePost} />
                        ) : step === 'resize' ? (
                            <EditorButtons
                                valueZoom={picture.zoom}
                                width={width}
                                height={height}
                                onChangeStep={onChangeStep}
                                onChangeResize={handleResize}
                                onChangeZoom={handleZoom}
                            />
                        ) : null}
                    </EditorWrapper>
                    <Button onClick={() => handleSave()}>Save</Button>
                </ModalContentWrapper>
            </Modal>
        </>
    )
}
