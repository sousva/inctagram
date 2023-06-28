'use client'

import React from 'react'

import {useAppSelector} from 'common/hooks/reduxHooks'

import {GeneralInformation} from 'common/components/GeneralInformation/GeneralInformation'
import {MyPayments} from 'common/components/MyPayments/MyPayments'
import {ProfileSettingsWrapper} from 'app/profile/profile-settings/styled'
import {ProfileSettingsAccordion} from 'common/components/ProfileSettingsAccordion/ProfileSettingsAccordion'
import {Devices} from 'common/components/Devices/Devices'
import {AccountManagement} from 'common/components/AccountManagement/AccountManagement'

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