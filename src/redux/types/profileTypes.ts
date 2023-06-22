export type UserAvatar = {
    avatars: UserAvatarAvatars[]
}
export type UserAvatarAvatars = {
    url: string
    width: number
    height: number
    fileSize: number
}

export type UpdateUserRequest = {
    userName: string
    firstName: string
    lastName: string
    city: string
    dateOfBirth: string
    aboutMe: string
}
