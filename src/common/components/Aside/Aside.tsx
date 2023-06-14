'use client'
import React from 'react'
import {AsideWrapper} from 'common/components/Aside/styled'
import {NavLink} from 'common/components/NavLink/NavLink'
import {HomeWhite} from 'common/assets/icons/homeWhite'
// import HomeWhite from 'common/assets/icons/homeWhite'

export const Aside = () => {
    return (
        <AsideWrapper>
            <nav>
                <NavLink href={'/profile/home'} name={'Home'} icon={<HomeWhite />} />
                <NavLink href={'/profile/messenger'} name={'Messenger'} icon={<HomeWhite />} />
                <NavLink href={'/profile/statistics'} name={'Statistics'} icon={<HomeWhite />} />
            </nav>
        </AsideWrapper>
    )
}
