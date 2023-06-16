export const PATH = {
    // Auth
    LOGIN: '/auth/login',
    REGISTRATION: '/auth/registration',
    FORGOT_PASSWORD: '/auth/forgot-password',
    EXPIRED_LINK: '/auth/email-resending',
    REGISTRATION_CONFIRMED: '/auth/registrationConfirmed',
    CREATE_NEW_PASSWORD: '/create-new-password/:token',
    PROFILE_SETTINGS: 'profile/profile-settings',

    // Aside
    HOME: '/profile/home',
    CREATE: '/profile/create',
    MY_PROFILE: '/profile/my-profile',
    MESSENGER: '/profile/messenger',
    SEARCH: '/profile/search',
    STATISTICS: '/profile/statistics',
} as const
