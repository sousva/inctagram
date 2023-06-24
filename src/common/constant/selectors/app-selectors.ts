import {RootState} from 'redux/store'

export const ThemeSelector = (state: RootState) => state.app.theme
export const NotificationsSelector = (state: RootState) => state.app.notifications
export const ProfileSettingsSelector = (state: RootState) => state.app.profileSettingsTabs
