'use client'

import React from 'react'
import ProfileSettingsAccordion from 'app/profile/profile-settings/ProfileSettingsAccordion/ProfileSettingsAccordion'
import {useAppSelector} from 'common/hooks/reduxHooks'
import {AccountManagement} from 'app/profile/profile-settings/AccountManagement/AccountManagement'
import {Devices} from 'app/profile/profile-settings/Devices/Devices'
import {GeneralInformation} from 'app/profile/profile-settings/GeneralInformation/GeneralInformation'
import {MyPayments} from 'app/profile/profile-settings/MyPayments/MyPayments'

export default function Page() {
    const profileSettingActiveTab = useAppSelector(state => state.app.profileSettingsTabs)
    return (
        <nav>
            <ProfileSettingsAccordion />
            <section>
                {profileSettingActiveTab === 'generalInformation' && <GeneralInformation />}
                {profileSettingActiveTab === 'devices' && <Devices />}
                {profileSettingActiveTab === 'accountManagement' && <AccountManagement />}
                {profileSettingActiveTab === 'myPayments' && <MyPayments />}
            </section>
        </nav>
    )
}
