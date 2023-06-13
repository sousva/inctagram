'use client'

import Image from 'next/image'
import React from 'react'
import image from '../../../../common/assets/icons/image.png'
import {
    Circle,
    CircleSection,
    Container,
    ImageWrapper,
    InputsSection,
    Wrapper,
} from 'app/profile/profile-settings/GeneralInformation/styled'
import {Button} from 'common/components/Button/Button'
import {InputText} from 'common/components/InputText/InputText'
import {Textarea} from 'common/components/Textarea/Textarea'

export const GeneralInformation = () => {
    return (
        <Wrapper>
            <Container>
                <CircleSection>
                    <Circle>
                        <ImageWrapper>
                            <Image width={36} height={36} src={image} alt={'image'} />
                        </ImageWrapper>
                    </Circle>
                    <Button style={{marginTop: '20px'}} variant={'outlined'}>
                        Add a Profile photo
                    </Button>
                </CircleSection>
                <InputsSection>
                    <InputText style={{width: '550px'}} label='Username'></InputText>
                    <InputText label='First Name'></InputText>
                    <InputText label='Last Name'></InputText>
                    <div>
                        Date of birthday <br />
                        <input type='date' />
                    </div>
                    <InputText label='City'></InputText>
                    <Textarea label='About me'></Textarea>
                </InputsSection>
            </Container>
            <Button>Save Changes</Button>
        </Wrapper>
    )
}
