import axios from 'axios'
import cookie from 'react-cookies'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string
const domainURL = process.env.NEXT_PUBLIC_DOMAIN_URL as string

export const instance = axios.create({
    withCredentials: true,
    baseURL,
})

instance.interceptors.request.use(
    config => {
        const token = cookie.load('accessToken')

        if (token) {
            config.headers.Authorization = 'Bearer ' + token
        }

        return config
    },
    error => Promise.reject(error)
)

instance.interceptors.response.use(
    config => {
        return config
    },
    async error => {
        const originalRequest = error.config

        if (error.response.status == 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true
            try {
                await serverAuthAPI.refreshTokens()

                return instance.request(originalRequest)
            } catch (e) {
                console.log('User is not authorized (in interceptors.response)')
            }
        }
        throw error
    }
)

export const serverAuthAPI = {
    async login(data: loginDataType) {
        try {
            const res = await instance.post<{accessToken: string}>(`${baseURL}auth/login`, data)
            console.log(res.headers)
            // await axios.post(`${domainURL}api/set`, {accessToken: res.data.accessToken})
            // cookie.setRawCookie(`accessToken=${res.data.accessToken}`)

            // const token = cookie.load('accessToken')
            // console.log(token)

            return
        } catch (e) {
            throw new Error('Cant login and obtain accessToken')
        }
    },
    async authMe() {
        const accessToken = cookie.load('accessToken')

        if (accessToken) {
            try {
                const res = await instance.get<authMeDataType>(`${baseURL}auth/me`, {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                })

                return res.data
            } catch (e) {
                throw new Error('Cant make authMe request')
            }
        }
        throw new Error(`i couldn't obtain accessToken in authMe request`)
    },
    async refreshTokens() {
        try {
            const res = await instance.post<{accessToken: string}>(`${baseURL}auth/update-tokens`, {
                withCredentials: true,
            })

            cookie.save('accessToken', res.data.accessToken, {})

            return res.data.accessToken
        } catch (e) {
            throw new Error('Cant make request for refresh tokens')
        }
    },
}

/////////////////////////////////////////////////////////////////////////

type loginDataType = {
    email: string
    password: string
}
type authMeDataType = {
    userId: number
    userName: string
    email: string
}
