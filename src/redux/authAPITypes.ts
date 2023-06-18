export type SignUpArgType = {
    userName: string
    email: string
    password: string
}

export type ForgotPasswordArgType = {
    email: string
    recaptcha: string
}

export type NewPasswordArgType = {
    newPassword: string
    recoveryCode: string
}

export type UserType = {
    email: string | null
    userId: number | null
    userName: string | undefined
}