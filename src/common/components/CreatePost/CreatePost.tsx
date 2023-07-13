import {Modal} from 'common/components/Modal/BaseModal'
import React, {ChangeEvent, RefObject, useRef, useState} from 'react'
import CreateIcon from 'common/assets/icons/create.svg'

import {useAppDispatch} from 'common/hooks/reduxHooks'
import {CanvasContainer, CreatePostWrapper, EditorWrapper, EmptyImageWrapper, ModalContentWrapper} from './styled'
import EmptyIcon from '../../assets/icons/emptyAvatar.svg'
import {Button} from '../Button/Button'
import {useUploadImageMutation} from '../../../redux/api/postsAPI'
import {SetAppNotificationAC} from '../../../redux/appSlice'
import AvatarEditor from 'react-avatar-editor'
import {EditorPanel} from './components/EditorPanel/EditorPanel'
import {SelectPhoto} from './components/SelectPhoto/SelectPhoto'
import {PresetFilters} from './components/PresetFilters/PresetFilters'
import {createFilteredFile} from './components/PresetFilters/createFilteredFile'
import {EditorButtons} from './components/EditorButtons/EditorButtons'

export type StepsType = 'Add Photo' | 'Cropping' | 'Filters' | 'Describe'

export const CreatePost = () => {
    const dispatch = useAppDispatch()
    const [post, {isLoading, isError}] = useUploadImageMutation()
    const editorRef = useRef<AvatarEditor>(null)
    const [step, setStep] = useState<StepsType>('Add Photo')
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

    const handleSave = async () => {
        if (editorRef.current) {
            const file = await createFilteredFile(editorRef, filter)

            const formData = new FormData()

            formData.append('file', file)

            post(formData)
                .unwrap()
                .then(() => {
                    console.log('ОТРАБОТАЛ')
                    dispatch(
                        SetAppNotificationAC({
                            notifications: {type: 'success', message: 'Your Avatar was successfully uploaded'},
                        })
                    )
                })

                .catch(error => {
                    console.log(error)
                    dispatch(
                        SetAppNotificationAC({
                            notifications: {type: 'error', message: error.message},
                        })
                    )
                })
        }
    }

    const handleCreatePost = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        let url = URL.createObjectURL(e.target.files[0])
        setPicture({
            ...picture,
            img: url,
        })

        setStep('Cropping')
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

    // const setEditorRef = (ref: AvatarEditor | null) => {
    //     setEditor(ref)
    // }

    const onChangeStep = (step: StepsType) => {
        if (step === 'Add Photo') {
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
            <Modal title={step} isOpen={isOpen} handleClose={handleClose}>
                <ModalContentWrapper>
                    {step !== 'Add Photo' && <EditorButtons onChangeStep={onChangeStep} title={step} />}
                    <EditorWrapper>
                        {picture.img.length ? (
                            <>
                                <CanvasContainer width={width} height={height}>
                                    <AvatarEditor
                                        ref={editorRef}
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
                                {step === 'Filters' && (
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
                        {step === 'Add Photo' ? (
                            <SelectPhoto handleCreatePost={handleCreatePost} />
                        ) : step === 'Cropping' ? (
                            <EditorPanel
                                valueZoom={picture.zoom}
                                width={width}
                                height={height}
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
