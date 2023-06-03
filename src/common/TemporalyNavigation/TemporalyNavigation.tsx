'use client'
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import {PATH} from 'common/constans/path/path'


const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;

    a {
        text-decoration: none;
        color: ${props => props.theme.textColor};
    }
`

export const TemporalyNavigation = () => {
    return (
        <Wrapper>
            <Link href={PATH.REGISTRATION}>Registration</Link>
            <Link href={'/mergerOfAccounts'}>mergerOfAccounts</Link>
            <Link href={'/congratulations'}>congratulations</Link>
            <Link href={'/emailVerification'}>emailVerification</Link>
            <Link href={PATH.LOGIN}>login</Link>
            <Link href={PATH.FORGOT_PASSWORD}>forgotPassword</Link>
            <Link href={PATH.CREATE_NEW_PASSWORD}>createNewPassword</Link>
        </Wrapper>
    )
}
