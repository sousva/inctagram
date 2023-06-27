import {cookies} from 'next/headers'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string

export const serverAuthAPI = {
    async login(data: loginDataType) {
        try {
            const res = await fetch(`${baseURL}auth/login`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                }),
            })
            const loginResponse = await res.json()

            if (loginResponse.accessToken) {
                cookies().set('accessToken', loginResponse.accessToken)
                return loginResponse.accessToken
            }
        } catch (e) {
            throw new Error('Cant obtain accessToken')
        }
    },
    async authMe() {
        try {
            const accessToken = cookies().get('accessToken')

            if (accessToken?.value) {
                const res = await fetch(`${baseURL}auth/me`, {
                    method: 'GET',
                    headers: new Headers({
                        Authorization: `Bearer ${accessToken?.value}`,
                        'Content-Type': 'application/json',
                        accept: 'application/json',
                        credentials: 'include',
                    }),
                })
                const meResponse = await res.json()
                return meResponse
            }
            return null
        } catch (e) {
            throw new Error('Cant make authMe request')
        }
    },
    async refreshTokens() {
        try {
            const res = await fetch(`${baseURL}auth/update-tokens`, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                    credentials: 'include',
                }),
            })
            const meResponse = await res.json()

            await cookies().set('accessToken', meResponse.accessToken)

            return meResponse
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
