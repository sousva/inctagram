'use client'
import React, {useState} from 'react'
import {HomePageStyled} from './HomePage.styled'
import {Modal} from 'common/components/Modal/BaseModal'

export default function Page() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <HomePageStyled>
            <h1>Home Page</h1>
            <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
                This is Modal Content!
            </Modal>
            <button onClick={() => setIsOpen(true)}>Click to Open Modal</button>
        </HomePageStyled>
    )
}
