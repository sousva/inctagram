import {Button} from '../../../Button/Button'
import React, {ChangeEvent} from 'react'
import {EditorButtons} from '../EditorButtons/EditorButtons'
import {EditPhotoWrapper} from './styled'
import {StepsType} from '../../CreatePost'
import {SelectPhoto} from '../SelectPhoto/SelectPhoto'

type EditPhotoType = {
    step: string
    valueZoom: string
    width: number
    height: number
    onChangeStep: (step: StepsType) => void
    onChangeResize: (width: number, height: number) => void
    handleCreatePost: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeZoom: (e: ChangeEvent<HTMLInputElement>) => void
}

export const EditPhoto: React.FC<EditPhotoType> = props => {
    return (
        <EditPhotoWrapper>
            {props.step === 'select' ? (
                <SelectPhoto handleCreatePost={props.handleCreatePost} />
            ) : props.step === 'resize' ? (
                <EditorButtons {...props} />
            ) : (
                'filters'
            )}
        </EditPhotoWrapper>
    )
}
