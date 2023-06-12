import React from 'react'
import {ProfileSettingsWrapper} from 'app/profile/profile-settings/styled'
import {setProfileSettingsTabsAC, TabsSettingsType} from 'redux/appSlice'
import {useAppDispatch} from 'common/hooks/reduxHooks'

const ProfileSettingsAccordion = () => {
    const dispatch = useAppDispatch()

    const setAccordionHandler = (tab: TabsSettingsType) => {
        dispatch(setProfileSettingsTabsAC({tab}))
    }
    return (
        <ProfileSettingsWrapper>
            <div onClick={() => setAccordionHandler('generalInformation')}>General Information</div>
            <div onClick={() => setAccordionHandler('devices')}>Devices</div>
            <div onClick={() => setAccordionHandler('accountManagement')}>Account Management</div>
            <div onClick={() => setAccordionHandler('myPayments')}>My Payments</div>
        </ProfileSettingsWrapper>
    )
}

export default ProfileSettingsAccordion
