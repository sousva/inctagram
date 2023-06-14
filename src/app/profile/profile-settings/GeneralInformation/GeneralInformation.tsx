'use client'

import Image from 'next/image'
import React from 'react'
import image from '../../../../common/assets/icons/image.png'
import {GeneralInformationWrapper} from 'app/profile/profile-settings/GeneralInformation/styled'
import {Button} from 'common/components/Button/Button'
import {InputText} from 'common/components/InputText/InputText'
import {Textarea} from 'common/components/Textarea/Textarea'
import {CustomDatePicker} from 'common/components/DatePicker/DatePicker'

export const GeneralInformation = () => {
    return (
        <GeneralInformationWrapper>
            <div className='formSection'>
                <div className='avatarImage'>
                    <div className='circleImage'>
                        <Image className='photoIcon' width={36} height={36} src={image} alt={'image'} />
                    </div>
                    <Button type='button' variant={'outlined'}>
                        Add a Profile photo
                    </Button>
                </div>
                <div className='inputSection'>
                    <InputText label='Username'></InputText>
                    <InputText label='First Name'></InputText>
                    <InputText label='Last Name'></InputText>
                    <CustomDatePicker></CustomDatePicker>
                    <InputText label='City'></InputText>
                    <Textarea label='About me'></Textarea>
                </div>
            </div>
            <Button className='buttonSave'>Save Changes</Button>
        </GeneralInformationWrapper>
    )
}
