'use client'
import React from 'react'
import {HomePageStyled} from './HomePage.styled'
import process from 'process'

export default function Page() {
    console.log('process.env.BASE_URL', process.env.NEXT_PUBLIC_BASE_URL)
    return (
        <HomePageStyled>
            <h1>Home Page</h1>
        </HomePageStyled>
    )
}
