import {api} from './api'
import {UploadedImageResponse} from '../types/postsTypes'

export const postsAPI = api.injectEndpoints({
    endpoints: build => ({
        uploadImage: build.mutation<UploadedImageResponse, FormData | File>({
            query: body => ({
                url: `posts/image`,
                method: 'POST',
                body,
            }),
        }),
    }),
})

export const {useUploadImageMutation} = postsAPI
