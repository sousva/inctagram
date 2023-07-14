export type PostsType = {
    totalCount: number
    pagesCount: number
    page: number
    pageSize: number
    items: PostsTypeItems[]
}
export type PostsTypeItemsImages = {
    url: string
    width: number
    height: number
    fileSize: number
    uploadId: string
}
export type PostsTypeItems = {
    id: number
    description: string
    location: string
    images: PostsTypeItemsImages[]
    createdAt: string
    updatedAt: string
}
