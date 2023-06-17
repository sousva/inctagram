import React from 'react'
import {InputText} from 'common/components/InputText/InputText'
import {CustomDatePicker} from 'common/components/DatePicker/DatePicker'
import {Textarea} from 'common/components/Textarea/Textarea'
import {Button} from 'common/components/Button/Button'
import {GeneralInformationFormWrapper} from 'app/profile/profile-settings/GeneralInformation/GeneralInformationForm/styled'

export const GeneralInformationForm = () => {
    return (
        <GeneralInformationFormWrapper>
            <InputText label='Username'></InputText>
            <InputText label='First Name'></InputText>
            <InputText label='Last Name'></InputText>
            <CustomDatePicker></CustomDatePicker>
            <InputText label='City'></InputText>
            <Textarea label='About me'></Textarea>
            <Button className='buttonSave'>Save Changes</Button>
        </GeneralInformationFormWrapper>
    )
}
