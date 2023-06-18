'use client'

import Image from 'next/image'
import React from 'react'
import image from 'common/assets/icons/image.png'
import {GeneralInformationWrapper} from 'common/components/GeneralInformation/styled'
import {Button} from 'common/components/Button/Button'
import {GeneralInformationForm} from 'common/components/GeneralInformation/GeneralInformationForm/GeneralInformationForm'

export const GeneralInformation = () => {
    return (
        <GeneralInformationWrapper>
            <div className='avatarImage'>
                <div className='circleImage'>
                    <Image className='photoIcon' width={36} height={36} src={image} alt={'image'} />
                </div>
                <Button className='buttonProfile' type='button' variant={'outlined'}>
                    Add a Profile photo
                </Button>
            </div>
            <GeneralInformationForm />
        </GeneralInformationWrapper>
    )
}
