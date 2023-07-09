import React, {ChangeEvent, useState} from 'react'
import RatioIcon from '../../../../assets/icons/ratio.svg'
import ZoomIcon from '../../../../assets/icons/zoom.svg'
import {EditorButtonsWrapper, SelectWrapper, ZoomWrapper} from './styled'

type EditorButtonsType = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const EditorButtons: React.FC<EditorButtonsType> = props => {
    const [selectHidden, setSelectHidden] = useState(false)
    const [zoomHidden, setZoomHidden] = useState(false)
    return (
        <EditorButtonsWrapper>
            <SelectWrapper hidden={selectHidden}>
                <span>Original</span>
                <span>1:1</span>
                <span>4:5</span>
                <span>16:9</span>
            </SelectWrapper>
            <ZoomWrapper hidden={zoomHidden}>
                <input type='range' value={props.value} onChange={props.onChange} min={1} max={12} step='0.5' />
            </ZoomWrapper>
            <RatioIcon onClick={() => setSelectHidden(!selectHidden)} />
            <ZoomIcon onClick={() => setZoomHidden(!zoomHidden)} />
        </EditorButtonsWrapper>
    )
}
