'use client'

import React from 'react'

import {useAppSelector} from 'common/hooks/reduxHooks'
import {AccountManagement} from 'app/profile/profile-settings/AccountManagement/AccountManagement'
import {Devices} from 'app/profile/profile-settings/Devices/Devices'
import {GeneralInformation} from 'app/profile/profile-settings/GeneralInformation/GeneralInformation'
import {MyPayments} from 'app/profile/profile-settings/MyPayments/MyPayments'
import {ProfileSettingsWrapper} from 'app/profile/profile-settings/styled'
import {ProfileSettingsAccordion} from 'app/profile/profile-settings/ProfileSettingsAccordion/ProfileSettingsAccordion'

export default function Page() {
    const profileSettingActiveTab = useAppSelector(state => state.app.profileSettingsTabs)
    return (
        <ProfileSettingsWrapper>
            <ProfileSettingsAccordion />
            <div>
                {profileSettingActiveTab === 'generalInformation' && <GeneralInformation />}
                {profileSettingActiveTab === 'devices' && <Devices />}
                {profileSettingActiveTab === 'accountManagement' && <AccountManagement />}
                {profileSettingActiveTab === 'myPayments' && <MyPayments />}
            </div>
        </ProfileSettingsWrapper>
    )
}
