import React from 'react'

import {useAppSelector} from 'shared/hooks/reduxHooks'

import {GeneralInformation} from 'common/components/GeneralInformation/GeneralInformation'
import {MyPayments} from 'common/components/MyPayments/MyPayments'
import {ProfileSettingsAccordion} from 'common/components/ProfileSettingsAccordion/ProfileSettingsAccordion'
import {Devices} from 'common/components/Devices/Devices'
import {AccountManagement} from 'common/components/AccountManagement/AccountManagement'
import {ProfileSettingsWrapper} from 'common/styles/ProfileSettingsPage'
import {getHomeLayout} from '_app/Layouts/HomeLayout'
import {GetServerSideProps, InferGetServerSidePropsType} from 'next'

export interface UserProfile {
    id: number
    userName: string
    firstName: string
    lastName: string
    city: string
    dateOfBirth: Date
    aboutMe: string
    avatars: UserProfileAvatars[]
}

export interface UserProfileAvatars {
    url: string
    width: number
    height: number
    fileSize: number
}

export const getServerSideProps: GetServerSideProps<{
    serverData: UserProfile
}> = async context => {
    const accessToken = context.req.cookies.accessToken

    const res = await fetch('https://inctagram-api.vercel.app/api/users/profile', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${accessToken}`,
        },
    })
    const serverData = await res.json()
    console.log(serverData)
    return {props: {serverData}}
}
export default function ProfileSettingsPage({serverData}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const profileSettingActiveTab = useAppSelector(state => state.app.profileSettingsTabs)

    return (
        <ProfileSettingsWrapper>
            <ProfileSettingsAccordion />
            <div>
                {profileSettingActiveTab === 'generalInformation' && <GeneralInformation data={serverData} />}
                {profileSettingActiveTab === 'devices' && <Devices />}
                {profileSettingActiveTab === 'accountManagement' && <AccountManagement />}
                {profileSettingActiveTab === 'myPayments' && <MyPayments />}
            </div>
        </ProfileSettingsWrapper>
    )
}
ProfileSettingsPage.getLayout = getHomeLayout
