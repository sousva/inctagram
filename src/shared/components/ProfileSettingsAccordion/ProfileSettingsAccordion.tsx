import React from 'react'
import {setProfileSettingsTabsAC, TabsSettingsType} from '_app/store/appSlice'
import {useAppDispatch, useAppSelector} from 'shared/hooks/reduxHooks'
import {TabButton} from 'shared/components/TabButton/TabButton'

type TabNamesType = {
    name: TabsSettingsType
    labelName: string
}
export const ProfileSettingsAccordion = () => {
    const profileSettingActiveTab = useAppSelector(state => state.app.profileSettingsTabs)
    const dispatch = useAppDispatch()

    const tabNames: TabNamesType[] = [
        {name: 'generalInformation', labelName: 'General Information'},
        {name: 'devices', labelName: 'Devices'},
        {name: 'accountManagement', labelName: 'Account Management'},
        {name: 'myPayments', labelName: 'My Payments'},
    ]

    const setAccordionHandler = (tab: TabsSettingsType) => {
        dispatch(setProfileSettingsTabsAC({tab}))
    }
    return (
        <div>
            {tabNames.map(tabName => (
                <TabButton
                    key={tabName.name}
                    $active={profileSettingActiveTab === tabName.name}
                    onClick={() => setAccordionHandler(`${tabName.name}`)}
                >
                    {tabName.labelName}
                </TabButton>
            ))}
        </div>
    )
}
