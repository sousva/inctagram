import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string

export const instance = axios.create({
    baseURL,
    withCredentials: true,
})

export const login = async (email: string, password: string) => {
    console.log('loginfunction')
    try {
        const res = await instance.post<{email: string; password: string}, {data: {accessToken: string}}>(
            'auth/login',
            {
                email,
                password,
            }
        )
        const token = res.data.accessToken
        if (token) {
            return token
        }
        return null
    } catch (e) {
        console.log(e)
        return null
    }
}
