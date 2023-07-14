'use client'
import React, {ComponentProps, forwardRef} from 'react'
import {Wrapper} from 'shared/components/InputText/InputText.styled'
import {FieldError} from 'react-hook-form'

type DefaultInputPropsType = ComponentProps<'input'>

type InputTextProps = DefaultInputPropsType & {
    label?: string
    error?: FieldError | undefined
}
export const InputText = forwardRef<HTMLInputElement, InputTextProps>((props, ref) => {
    return (
        <Wrapper>
            <input ref={ref} {...props} required />
            <span className='highlight'></span>
            <span className='bar'></span>
            <span className='error'>{props.error?.message}</span>
            <label>{props.label}</label>
        </Wrapper>
    )
})
InputText.displayName = 'InputText' //https://bobbyhadz.com/blog/react-component-is-missing-display-name
