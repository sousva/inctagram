'use client'
import React from 'react'
import {AuthContainer} from 'common/components/AuthContainer/AuthContainer'
import styled from 'styled-components'
import {Button} from 'common/components/Button/Button'
import Image from 'next/image'
import timeManagement from './../../common/assets/pictures/timeManagement.png'

const Wrapper = styled.div`
    h1 {
        font-size: 20px;
        font-weight: 700;
        color: ${props => props.theme.textColor};
    }
    p {
        font-size: 16px;
        font-weight: 400;
        color: ${props => props.theme.textColor};
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
                <h1>Email verification link expired</h1>
                <p>Looks like the verification link has expired. Not to worry, we can send the link again</p>
                <Button>Resend verification link</Button>
                <span>
                    <Image src={timeManagement} alt={'timeManagement picture'} />
                </span>
            </Wrapper>
        </AuthContainer>
    )
}
