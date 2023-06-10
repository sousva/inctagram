export const PATH = {
    HOME: '/',
    LOGIN: '/auth/login',
    REGISTRATION: '/auth/registration',
    FORGOT_PASSWORD: '/forgot-password',
    EXPIRED_LINK: '/auth/email-resending',
    REGISTRATION_CONFIRMED: '/auth/registrationConfirmed',
    CREATE_NEW_PASSWORD: '/create-new-password/:token',
} as const
