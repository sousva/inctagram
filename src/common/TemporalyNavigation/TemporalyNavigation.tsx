'use client'
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

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
            <Link href={'/registration'}>Registration</Link>
            <Link href={'/mergerOfAccounts'}>mergerOfAccounts</Link>
            <Link href={'/congratulations'}>congratulations</Link>
            <Link href={'/emailVerification'}>emailVerification</Link>
            <Link href={'/login'}>login</Link>
            <Link href={'/forgotPassword'}>forgotPassword</Link>
            <Link href={'/createNewPassword'}>createNewPassword</Link>
        </Wrapper>
    )
}
