'use client'

import React from 'react'
import {GeneralInformationWrapper} from 'app/profile/profile-settings/GeneralInformation/styled'
import {Avatar} from 'app/profile/profile-settings/Avatar/Avatar'

export const GeneralInformation = () => {
    return (
        <GeneralInformationWrapper>
            <div>
                <Avatar />
                {/*<div className='inputSection'>*/}
                {/*    <InputText className='inputText' label='Username'></InputText>*/}
                {/*    <InputText className='inputText' label='First Name'></InputText>*/}
                {/*    <InputText className='inputText' label='Last Name'></InputText>*/}
                {/*    <CustomDatePicker></CustomDatePicker>*/}
                {/*    <InputText className='inputText' label='City'></InputText>*/}
                {/*    <Textarea label='About me'></Textarea>*/}
                {/*</div>*/}
                {/*<Button className='buttonSave'>Save Changes</Button>*/}
            </div>
        </GeneralInformationWrapper>
    )
}
