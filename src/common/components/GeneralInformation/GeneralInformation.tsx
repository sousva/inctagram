'use client'

import React from 'react'
import {GeneralInformationWrapper} from 'common/components/GeneralInformation/styled'
import {GeneralInformationForm} from 'common/components/GeneralInformation/GeneralInformationForm/GeneralInformationForm'
import {Avatar} from 'common/components/Avatar/Avatar'

export const GeneralInformation = () => {
    return (
        <GeneralInformationWrapper>
            <Avatar />
            <GeneralInformationForm />
        </GeneralInformationWrapper>
    )
}
