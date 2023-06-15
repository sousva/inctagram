export type SignUpRequestType = {
    userName: string
    email: string
    password: string
}

export type SignUpResponseType = {
    statusCode: number
    messages: [
        {
            message: string
            field: string
        }
    ]
    error: string
}

export type UserResponseType = {
    email: string
    userId: number
    userName: string
}
