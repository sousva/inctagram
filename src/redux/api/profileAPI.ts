import {api} from 'redux/api/api'
import {UpdateUserRequest, UserAvatar} from 'redux/types/profileTypes'
import {ResponseType} from 'redux/types/authTypes'

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
        updateUser: build.mutation<ResponseType, UpdateUserRequest>({
            query: body => ({
                url: `/users/profile`,
                method: 'PUT',
                body,
            }),
        }),
    }),
})

export const {useUploadAvatarMutation, useDeleteAvatarMutation, useUpdateUserMutation} = profileAPI
