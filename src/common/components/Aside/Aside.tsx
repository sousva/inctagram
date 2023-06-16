'use client'
import React from 'react'
import {AsideWrapper} from 'common/components/Aside/styled'
import {NavLink} from 'common/components/NavLink/NavLink'
import HomeIcon from 'common/assets/icons/home.svg'
import MyProfileIcon from 'common/assets/icons/myProfile.svg'
import MessengerIcon from 'common/assets/icons/messenger.svg'
import StatisticsIcon from 'common/assets/icons/statistics.svg'
import CreateIcon from 'common/assets/icons/create.svg'
import SearchIcon from 'common/assets/icons/search.svg'

export const Aside = () => {
    return (
        <AsideWrapper>
            <nav>
                <NavLink href={'/profile/home'} name={'Home'} icon={<HomeIcon />} />
                <NavLink href={'/profile/create'} name={'Create'} icon={<CreateIcon />} />
                <NavLink href={'/profile/my-profile'} name={'My Profile'} icon={<MyProfileIcon />} />
                <NavLink href={'/profile/messenger'} name={'Messenger'} icon={<MessengerIcon />} />
                <NavLink href={'/profile/search'} name={'Search'} icon={<SearchIcon />} />
                <NavLink href={'/profile/statistics'} name={'Statistics'} icon={<StatisticsIcon />} />
            </nav>
        </AsideWrapper>
    )
}
