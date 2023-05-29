'use client'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: red;
    padding: 30px;
`
export const InputText = () => {
    return (
        <Wrapper>
            <input type='text' />
        </Wrapper>
    )
}
