import React, {ComponentProps, forwardRef} from 'react'
import {InputFileWrapper} from 'common/components/InputFile/styled'

type DefaultInputPropsType = ComponentProps<'input'>

type InputFileProps = DefaultInputPropsType & {
    title: string
}
export const InputFile = forwardRef<HTMLInputElement, InputFileProps>((props, ref) => {
    return (
        <InputFileWrapper htmlFor='actual-btn'>
            <input type='file' id='actual-btn' ref={ref} {...props} hidden />
            {props.title}
        </InputFileWrapper>
    )
})

InputFile.displayName = 'InputFile'
