'use client'
import React from 'react'
import {AsideWrapper} from 'common/components/Aside/styled'
import {NavLink} from 'common/components/NavLink/NavLink'
import HomeWhite from './../../assets/icons/homeWhite.svg'

export const Aside = () => {
    return (
        <AsideWrapper>
            <nav>
                <NavLink href={'/home'} name={'Home'} icon={<HomeWhite />} />
                <NavLink href={'/profile/messenger'} name={'Messenger'} icon={<HomeWhite />} />
                <NavLink href={'/profile/statistics'} name={'Statistics'} icon={<HomeWhite />} />
            </nav>
        </AsideWrapper>
    )
}
