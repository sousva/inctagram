import React from 'react'
import {LogOut} from 'common/components/LogOut/LogOut'
import {AsideWrapper} from 'common/components/Aside/styled'
import {NavLink} from 'common/components/NavLink/NavLink'
import HomeIcon from '@icons/home.svg'
import MyProfileIcon from '@icons/myProfile.svg'
import MessengerIcon from '@icons/messenger.svg'
import StatisticsIcon from '@icons/statistics.svg'
import CreateIcon from '@icons/create.svg'
import SearchIcon from '@icons/search.svg'
import {PATH} from 'app/path'
import FavoritesIcon from '@icons/favorites.svg'
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
                <NavLink href={PATH.FAVORITES} name={'Favorites'} icon={<FavoritesIcon />} />
                <LogOut />
            </nav>
        </AsideWrapper>
    )
}
