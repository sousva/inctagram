import React, {ChangeEvent, useState} from 'react'
import RatioIcon from '../../../../assets/icons/ratio.svg'
import ZoomIcon from '../../../../assets/icons/zoom.svg'
import CropOriginal from '../../../../assets/icons/cropOriginal.svg'
import Crop1x1 from '../../../../assets/icons/crop1x1.svg'
import Crop4x5 from '../../../../assets/icons/crop4x5.svg'
import Crop16x9 from '../../../../assets/icons/crop16x9.svg'
import {EditorButtonsWrapper, SelectWrapper, ZoomWrapper} from './styled'

type EditorButtonsType = {
    valueZoom: string
    width: number
    height: number
    onChangeResize: (width: number, height: number) => void
    onChangeZoom: (e: ChangeEvent<HTMLInputElement>) => void
}

const ORIGINAL_SIZE = {
    width: 485,
    height: 465,
}

const ASPECT_RATIO = {
    Original: 0,
    OneToOne: 1,
    FourToFive: 4 / 5,
    SixteenToNine: 16 / 9,
}

export const EditorButtons: React.FC<EditorButtonsType> = props => {
    const [selectHidden, setSelectHidden] = useState(false)
    const [zoomHidden, setZoomHidden] = useState(false)
    const ratioData = [
        {id: 1, value: 0, title: 'Original', icon: CropOriginal},
        {id: 2, value: 1, title: '1:1', icon: Crop1x1},
        {id: 3, value: 4 / 5, title: '4:5', icon: Crop4x5},
        {id: 4, value: 16 / 9, title: '16:9', icon: Crop16x9},
    ]

    const handlerCrop = (aspectRatio: number) => {
        console.log('aspectRatio', aspectRatio)
        if (aspectRatio === ASPECT_RATIO.OneToOne) {
            const newSize = Math.round(Math.sqrt(props.width * props.height))
            console.log('newSize', newSize)
            return props.onChangeResize(newSize, newSize)
        }

        if (aspectRatio === ASPECT_RATIO.FourToFive || aspectRatio === ASPECT_RATIO.SixteenToNine) {
            const newWidth = Math.round(Math.sqrt(props.width * props.height * aspectRatio))
            const newHeight = Math.round(newWidth / aspectRatio)
            console.log('newWidth', newWidth)
            console.log('newHeight', newHeight)
            return props.onChangeResize(newWidth, newHeight)
        }

        if (aspectRatio === ASPECT_RATIO.Original) {
            console.log(aspectRatio)
            return props.onChangeResize(ORIGINAL_SIZE.width, ORIGINAL_SIZE.height)
        }
    }

    return (
        <EditorButtonsWrapper>
            <SelectWrapper hidden={selectHidden}>
                {ratioData.map(el => (
                    <div key={el.id} onClick={() => handlerCrop(el.value)}>
                        <span>{el.title}</span>
                        <el.icon />
                    </div>
                ))}
            </SelectWrapper>
            <ZoomWrapper hidden={zoomHidden}>
                <input type='range' value={props.valueZoom} onChange={props.onChangeZoom} min={1} max={12} step='0.1' />
            </ZoomWrapper>
            <RatioIcon onClick={() => setSelectHidden(!selectHidden)} />
            <ZoomIcon onClick={() => setZoomHidden(!zoomHidden)} />
        </EditorButtonsWrapper>
    )
}
