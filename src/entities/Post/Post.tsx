import React from 'react'
import styled from 'styled-components'

export const PostWrapper = styled.div``

export const Post = () => {
    return (
        <PostWrapper>
            <PostHeader></PostHeader>
            <PostImage></PostImage>
            <PostFeatures></PostFeatures>
            <PostDesciption></PostDesciption>
            <PostLikes></PostLikes>
            <PostComments></PostComments>
        </PostWrapper>
    )
}
