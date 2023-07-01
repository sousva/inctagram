import React, {FC} from 'react'
import {GeneralInformationWrapper} from 'common/components/GeneralInformation/styled'
import {GeneralInformationForm} from 'common/components/GeneralInformation/GeneralInformationForm/GeneralInformationForm'
import {Avatar} from 'common/components/Avatar/Avatar'
import {UserProfile} from '../../../pages/profile/profile-settings'

export const GeneralInformation: FC<{data: UserProfile}> = ({data}) => {
    return (
        <GeneralInformationWrapper>
            <Avatar />
            <GeneralInformationForm data={data} />
        </GeneralInformationWrapper>
    )
}
