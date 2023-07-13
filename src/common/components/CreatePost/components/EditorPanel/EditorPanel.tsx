import React, {ChangeEvent, useState} from 'react'
import RatioIcon from '../../../../assets/icons/ratio.svg'
import ZoomIcon from '../../../../assets/icons/zoom.svg'
import CropOriginal from '../../../../assets/icons/cropOriginal.svg'
import Crop1x1 from '../../../../assets/icons/crop1x1.svg'
import Crop4x5 from '../../../../assets/icons/crop4x5.svg'
import Crop16x9 from '../../../../assets/icons/crop16x9.svg'
import AddPhotoToLibrary from 'common/assets/icons/emptyAvatar.svg'
import {EditorPanelWrapper, LibraryWrapper, SelectWrapper, ZoomWrapper} from './styled'
import {Button} from '../../../Button/Button'
import {StepsType} from '../../CreatePost'

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

export const EditorPanel: React.FC<EditorButtonsType> = props => {
    const [selectHidden, setSelectHidden] = useState(false)
    const [zoomHidden, setZoomHidden] = useState(false)
    const [libraryHidden, setLibraryHidden] = useState(false)
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
            return props.onChangeResize(newSize, newSize)
        }

        if (aspectRatio === ASPECT_RATIO.FourToFive || aspectRatio === ASPECT_RATIO.SixteenToNine) {
            const newWidth = Math.round(Math.sqrt(props.width * props.height * aspectRatio))
            const newHeight = Math.round(newWidth / aspectRatio)
            return props.onChangeResize(newWidth, newHeight)
        }

        if (aspectRatio === ASPECT_RATIO.Original) {
            return props.onChangeResize(ORIGINAL_SIZE.width, ORIGINAL_SIZE.height)
        }
    }

    return (
        <EditorPanelWrapper>
            <div className='popUpBtn'>
                <SelectWrapper hidden={selectHidden}>
                    {ratioData.map(el => (
                        <div key={el.id} onClick={() => handlerCrop(el.value)}>
                            <span>{el.title}</span>
                            <el.icon />
                        </div>
                    ))}
                </SelectWrapper>
                <ZoomWrapper hidden={zoomHidden}>
                    <input
                        type='range'
                        value={props.valueZoom}
                        onChange={props.onChangeZoom}
                        min={1}
                        max={12}
                        step='0.1'
                    />
                </ZoomWrapper>
                <LibraryWrapper hidden={libraryHidden}>LIBRARY</LibraryWrapper>
                <RatioIcon onClick={() => setSelectHidden(!selectHidden)} />
                <ZoomIcon onClick={() => setZoomHidden(!zoomHidden)} />
                <AddPhotoToLibrary onClick={() => setLibraryHidden(!libraryHidden)} />
            </div>
        </EditorPanelWrapper>
    )
}
