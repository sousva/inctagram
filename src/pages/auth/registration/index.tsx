import React from 'react'
import {getLayoutWithHeader} from '_app/Layouts/LayoutWithHeader'
import {RegistrationForm} from 'features/auth/RegistrationForm/RegistrationForm'

export default function RegistrationPage() {
    return <RegistrationForm />
}

RegistrationPage.getLayout = getLayoutWithHeader
