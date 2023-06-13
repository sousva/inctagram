'use client'

import Image from 'next/image'
import React from 'react'
import image from '../../../../common/assets/icons/image.png'
import {Circle, ImageWrapper, Wrapper} from 'app/profile/profile-settings/GeneralInformation/styled'
import {Button} from 'common/components/Button/Button'
import {InputText} from 'common/components/InputText/InputText'
import {Textarea} from 'common/components/Textarea/Textarea'

export const GeneralInformation = () => {
    return (
        <Wrapper>
            <section id='imageSection'>
                <Circle>
                    <ImageWrapper>
                        <Image width={36} height={36} src={image} alt={'image'} />
                    </ImageWrapper>
                </Circle>
                <Button variant={'outlined'}>Add a Profile photo</Button>
            </section>
            <section id='inputsSection'>
                <InputText label='Username'></InputText>
                <InputText label='First Name'></InputText>
                <InputText label='Last Name'></InputText>
                <div>
                    Date of birthday <br />
                    <input type='date' />
                </div>
                <InputText label='City'></InputText>
                <Textarea label='About me'></Textarea>
            </section>
            <Button>Save Changes</Button>
        </Wrapper>
    )
}
