'use client'
import React, {InputHTMLAttributes} from 'react'

import {Wrapper} from './InputText.styled'

export const InputText = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <Wrapper>
            <input id={props.name} type='text' {...props} />
            <span className='highlight'></span>
            <span className='bar'></span>
            <label id={props.name}>{props.name}</label>
        </Wrapper>
    )
}
