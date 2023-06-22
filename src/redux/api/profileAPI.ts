import {api} from 'redux/api/api'
import {UserAvatar} from 'redux/types/profileTypes'

export const profileAPI = api.injectEndpoints({
    endpoints: build => ({
        uploadAvatar: build.mutation<UserAvatar, FormData | File>({
            query: body => ({
                url: `users/profile/avatar`,
                method: 'POST',
                body,
            }),
        }),
        deleteAvatar: build.mutation({
            query: body => ({
                url: `users/profile/avatar`,
                method: 'DELETE',
                body,
            }),
        }),
    }),
})

export const {useUploadAvatarMutation, useDeleteAvatarMutation} = profileAPI
