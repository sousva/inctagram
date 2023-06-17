import {api} from 'redux/api/api'
import {ResponseType} from 'redux/types/authTypes'

export const profileAPI = api.injectEndpoints({
    endpoints: build => ({
        userAvatar: build.mutation<ResponseType, UserAvatar>({
            query: body => ({
                url: `users/profile/avatar`,
                method: 'POST',
                body,
                headers: {
                    // 'Content-Type: multipart/form-data'
                },
            }),
        }),
    }),
})

export type UserAvatar = {
    avatars: UserAvatarAvatars[]
}
export type UserAvatarAvatars = {
    url: string
    width: number
    height: number
    fileSize: number
}
export const {useUserAvatarMutation} = profileAPI
