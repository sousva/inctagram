import {Button} from '../../../Button/Button'
import React, {ChangeEvent} from 'react'
import {EditorButtons} from '../EditorButtons/EditorButtons'
import {EditPhotoWrapper} from './styled'

type EditPhotoType = {
    valueZoom: string
    width: number
    height: number
    onChangeResize: (width: number, height: number) => void
    onChangeZoom: (e: ChangeEvent<HTMLInputElement>) => void
}

export const EditPhoto: React.FC<EditPhotoType> = props => {
    return (
        <EditPhotoWrapper>
            <EditorButtons {...props} />

            <Button>Next</Button>
        </EditPhotoWrapper>
    )
}
