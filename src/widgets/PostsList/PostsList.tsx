import React from 'react'
import {Post} from 'entities/Post/Post'
import {PostCardType} from 'entities/Post/api/types'

type PostsListType = {
    posts: PostCardType[]
}
export const PostsList = (props: PostsListType) => {
    return (
        <div>
            {props.posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    )
}
