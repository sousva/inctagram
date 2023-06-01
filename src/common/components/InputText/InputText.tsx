'use client'
import React, {ComponentProps, forwardRef} from 'react'
import {Wrapper} from './InputText.styled'
import {FieldError} from 'react-hook-form'

type DefaultInputPropsType = ComponentProps<'input'>

type InputTextProps = DefaultInputPropsType & {
    label?: string
    error?: FieldError | undefined
}
export const InputText = forwardRef<HTMLInputElement, InputTextProps>((props, ref) => {
    console.log(props.error)
    return (
        <Wrapper>
            <input ref={ref} {...props} />
            <span className='highlight'></span>
            <span className='bar'></span>
            <label>{props.label}</label>
        </Wrapper>
    )
})
InputText.displayName = 'InputText' //https://bobbyhadz.com/blog/react-component-is-missing-display-name
