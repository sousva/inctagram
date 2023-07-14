import React from 'react'

import {useAppSelector} from 'shared/hooks/reduxHooks'

import {GeneralInformation} from 'common/components/GeneralInformation/GeneralInformation'
import {MyPayments} from 'shared/components/MyPayments/MyPayments'
import {ProfileSettingsAccordion} from 'shared/components/ProfileSettingsAccordion/ProfileSettingsAccordion'
import {Devices} from 'shared/components/Devices/Devices'
import {ProfileSettingsWrapper} from 'shared/styles/ProfileSettingsPage'
import {GetServerSideProps, InferGetServerSidePropsType} from 'next'
import {AccountManagement} from 'shared/components/AccountManagement/AccountManagement'
import {getAuthorizedLayout} from '_app/Layouts/authorized/AuthorizedLayout'

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
ProfileSettingsPage.getLayout = getAuthorizedLayout
