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

            // cookies().set('accessToken', loginResponse.accessToken)
            return loginResponse.accessToken
        } catch (e) {
            throw new Error('Cant obtain accessToken')
        }
    },
    async authMe(accessToken: string) {
        try {
            const res = await fetch(`${baseURL}auth/me`, {
                method: 'GET',
                headers: new Headers({
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                    credentials: 'include',
                }),
            })
            const meResponse = await res.json()
            return meResponse
        } catch (e) {
            throw new Error('Cant make authMe request')
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
