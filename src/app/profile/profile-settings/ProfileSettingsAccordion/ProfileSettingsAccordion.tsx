import React from 'react'
import {ProfileSettingsWrapper} from 'app/profile/profile-settings/styled'
import {setProfileSettingsTabsAC, TabsSettingsType} from 'redux/appSlice'
import {useAppDispatch, useAppSelector} from 'common/hooks/reduxHooks'
import {TabButton} from 'common/components/TabButton/TabButton'

const ProfileSettingsAccordion = () => {
    const profileSettingActiveTab = useAppSelector(state => state.app.profileSettingsTabs)
    const dispatch = useAppDispatch()

    const setAccordionHandler = (tab: TabsSettingsType) => {
        dispatch(setProfileSettingsTabsAC({tab}))
    }
    return (
        <ProfileSettingsWrapper>
            <TabButton
                active={profileSettingActiveTab === 'generalInformation'}
                onClick={() => setAccordionHandler('generalInformation')}
            >
                General Information
            </TabButton>
            <TabButton active={profileSettingActiveTab === 'devices'} onClick={() => setAccordionHandler('devices')}>
                Devices
            </TabButton>
            <TabButton
                active={profileSettingActiveTab === 'accountManagement'}
                onClick={() => setAccordionHandler('accountManagement')}
            >
                Account Management
            </TabButton>
            <TabButton
                active={profileSettingActiveTab === 'myPayments'}
                onClick={() => setAccordionHandler('myPayments')}
            >
                My Payments
            </TabButton>
        </ProfileSettingsWrapper>
    )
}

export default ProfileSettingsAccordion
