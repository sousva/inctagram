import {Button} from '../../../Button/Button'
import React from 'react'
import {StepsType} from '../../CreatePost'
import styled from 'styled-components'
import ArrowLeft from 'common/assets/icons/arrowLeft.svg'

type EditorButtonsType = {
    title: string
    onChangeStep: (step: StepsType) => void
}

export const EditorButtons: React.FC<EditorButtonsType> = props => {
    return (
        <EditorButtonsWrapper>
            <div>
                <Button variant={'text'} onClick={() => props.onChangeStep('Add Photo')}>
                    <ArrowLeft />
                </Button>
            </div>
            <span>{props.title}</span>
            <div>
                <Button variant={'text'} onClick={() => props.onChangeStep('Filters')}>
                    Next
                </Button>
            </div>
        </EditorButtonsWrapper>
    )
}

export const EditorButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    background-color: ${props => props.theme.palette.dark['300']};
    width: 100%;
    top: 0;
    left: 0;
    height: 60px;
    padding: 0 10px;

    span {
        font-weight: 700;
        font-size: 20px;
    }
`
