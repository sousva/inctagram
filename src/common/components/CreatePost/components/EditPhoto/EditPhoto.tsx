import {Button} from '../../../Button/Button'
import React, {ChangeEvent} from 'react'
import {EditorButtons} from '../EditorButtons/EditorButtons'
import {EditPhotoWrapper, Wrapper} from './styled'

type EditPhotoType = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const EditPhoto: React.FC<EditPhotoType> = props => {
    return (
        <EditPhotoWrapper>
            <EditorButtons value={props.value} onChange={props.onChange} />

            <Button>Next</Button>
        </EditPhotoWrapper>
    )
}
