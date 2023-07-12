import React from 'react'
import {getLayoutWithHeader} from '_app/Layouts/LayoutWithHeader'
import {LoginForm} from 'features/auth/LoginForm/LoginForm'

export default function LoginPage() {
    return <LoginForm />
}
LoginPage.getLayout = getLayoutWithHeader
