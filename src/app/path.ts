export const PATH = {
    HOME: '/',
    LOGIN: '/auth/login',
    REGISTRATION: '/auth/registration',
    FORGOT_PASSWORD: '/forgot-password',
    EXPIRED_LINK: '/auth/email-resending',
    CREATE_NEW_PASSWORD: '/create-new-password/:token',
} as const
