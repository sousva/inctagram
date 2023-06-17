'use client'
import CreateIcon from 'common/assets/icons/create.svg'
import HomeIcon from 'common/assets/icons/home.svg'
import MessengerIcon from 'common/assets/icons/messenger.svg'
import MyProfileIcon from 'common/assets/icons/myProfile.svg'
import SearchIcon from 'common/assets/icons/search.svg'
import StatisticsIcon from 'common/assets/icons/statistics.svg'
import {AsideWrapper} from 'common/components/Aside/styled'
import {LogOut} from 'common/components/LogOut/LogOut'
import {NavLink} from 'common/components/NavLink/NavLink'
import React from 'react'

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
                <NavLink href={'/profile/favorites'} name={'Favorites'} icon={<StatisticsIcon />} />
                <LogOut />
            </nav>
        </AsideWrapper>
    )
}
