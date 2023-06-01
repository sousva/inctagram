'use client'
import React, {ComponentProps, forwardRef} from 'react'

import {FieldError} from 'react-hook-form'
import {Wrapper} from '../InputText/InputText.styled'

type DefaultInputPropsType = ComponentProps<'textarea'>

type TextareaProps = DefaultInputPropsType & {
    label?: string
    error?: FieldError | undefined
}
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
    return (
        <Wrapper>
            <textarea ref={ref} {...props} required />
            <span className='highlight'></span>
            <span className='bar'></span>
            <label>{props.label}</label>
        </Wrapper>
    )
})
Textarea.displayName = 'Textarea' //https://bobbyhadz.com/blog/react-component-is-missing-display-name
