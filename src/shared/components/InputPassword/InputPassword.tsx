'use client'
import React, {ComponentProps, forwardRef, useState} from 'react'

import {FieldError} from 'react-hook-form'
import {Wrapper} from 'shared/components/InputText/InputText.styled'
import EyeWhite from 'common/assets/icons/eyeWhite.svg'
import EyeBlack from 'common/assets/icons/eyeBlack.svg'
import EyeOffBlack from 'common/assets/icons/eyeOffBlack.svg'
import EyeOffWhite from 'common/assets/icons/eyeOffWhite.svg'
import {IconButton} from 'shared/components/IconButton/IconButton'
import {useAppSelector} from 'shared/hooks/reduxHooks'

type DefaultInputPropsType = ComponentProps<'input'>

type InputProps = DefaultInputPropsType & {
    label?: string
    error?: FieldError | undefined
}
export const InputPassword = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const theme = useAppSelector(state => state.app.theme)
    const [see, setSee] = useState(false)

    const handleShowPassword = () => {
        setSee(!see)
    }
    return (
        <Wrapper>
            <input ref={ref} type={see ? 'text' : 'password'} {...props} required />
            <span className='highlight'></span>
            <span className='bar'></span>
            {see ? (
                <IconButton className='eye' onClick={handleShowPassword}>
                    {theme === 'dark' ? <EyeOffWhite /> : <EyeOffBlack />}
                </IconButton>
            ) : (
                <IconButton className='eye' onClick={handleShowPassword}>
                    {theme === 'dark' ? <EyeWhite /> : <EyeBlack />}
                </IconButton>
            )}
            <span className='error'>{props.error?.message}</span>
            <label>{props.label}</label>
        </Wrapper>
    )
})
InputPassword.displayName = 'InputPassword' //https://bobbyhadz.com/blog/react-component-is-missing-display-name
