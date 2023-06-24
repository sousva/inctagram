import {cookies} from 'next/headers'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string

export const login = async (data: loginDataType) => {
    const res = await fetch(`${baseURL}auth/login`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json',
            accept: 'application/json',
        }),
    })
    const loginResponse = await res.json()

    cookies().set('accessToken', loginResponse.accessToken)
    return loginResponse
}

export const authMe = async () => {
    const accessToken = cookies().get('accessToken')

    const res = await fetch(`${baseURL}/auth/me`, {
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
