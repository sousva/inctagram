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
import {PATH} from 'app/path'

export const Aside = () => {
    return (
        <AsideWrapper>
            <nav>
                <NavLink href={PATH.HOME} name={'Home'} icon={<HomeIcon />} />
                <NavLink href={PATH.CREATE} name={'Create'} icon={<CreateIcon />} />
                <NavLink href={PATH.MY_PROFILE} name={'My Profile'} icon={<MyProfileIcon />} />
                <NavLink href={PATH.MESSENGER} name={'Messenger'} icon={<MessengerIcon />} />
                <NavLink href={PATH.SEARCH} name={'Search'} icon={<SearchIcon />} />
                <NavLink href={PATH.STATISTICS} name={'Statistics'} icon={<StatisticsIcon />} />
                <NavLink href={'/profile/profile-settings'} name={'preferences'} icon={<StatisticsIcon />} />
            </nav>
        </AsideWrapper>
    )
}
