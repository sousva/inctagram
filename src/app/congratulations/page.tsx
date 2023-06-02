'use client'
import React from 'react'
import {AuthContainer} from 'common/components/AuthContainer/AuthContainer'
import styled from 'styled-components'
import {Button} from 'common/components/Button/Button'
import Image from 'next/image'
import congratulation from './../../common/assets/pictures/congratulation.png'

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
    button {
        margin-bottom: 20px;
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
                <h1>Congratulations!</h1>
                <p>Your email has been confirmed</p>
                <Button>Sing In</Button>
                <span>
                    <Image src={congratulation} alt={'congratulation'} />
                </span>
            </Wrapper>
        </AuthContainer>
    )
}
