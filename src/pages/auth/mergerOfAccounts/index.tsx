'use client'
import React from 'react'
import {AuthContainer} from 'common/components/AuthContainer/AuthContainer'
import styled from 'styled-components'
import {Button} from 'common/components/Button/Button'
import re from 'common/assets/pictures/congratulation.png'
import Image from 'next/image'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    button {
        width: 100%;
        max-width: 180px;
    }
    span {
        width: 100%;
        max-width: 400px;

        img {
            width: 100%;
            height: auto;
        }
    }
`
export default function Page() {
    return (
        <AuthContainer>
            <Wrapper>
                <h1>Merger of Accounts</h1>
                <p>The user with email Epam@epam.com is already in the system. Could we merge this accounts?</p>
                <Button variant={'outlined'}>Yes, merge</Button>
                <Button variant={'outlined'}>No</Button>
                <span>
                    <Image src={re} alt={'re'} />
                </span>
            </Wrapper>
        </AuthContainer>
    )
}
