import React from 'react'
import {PostCardType} from 'entities/Post/api/types'
import {PostHeader} from 'entities/Post/ui/PostHeader/PostHeader'
import {PostImage} from 'entities/Post/ui/PostImage/PostImage'
import {PostFeatures} from 'entities/Post/ui/PostFeatures/PostFeatures'
import {PostDesciption} from 'entities/Post/ui/PostDesciption/PostDesciption'
import {PostLikes} from 'entities/Post/ui/PostLikes/PostLikes'
import {PostComments} from 'entities/Post/ui/PostComments/PostComments'
import {PostWrapper} from 'entities/Post/Post.styled'

type PostType = {
    post: PostCardType
}
export const Post = ({post}: PostType) => {
    return (
        <PostWrapper>
            <PostHeader img={post.images[0].url} />
            <PostImage />
            <PostFeatures />
            <PostDesciption />
            <PostLikes />
            <PostComments />
        </PostWrapper>
    )
}
