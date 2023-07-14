import React from 'react'
import {PostHeaderWrapper} from 'entities/Post/ui/PostHeader/PostHeader.styled'
import {PopOverIcon} from 'entities/Post/ui/PostHeader/popOverIcon'
import {IconButton} from 'shared/components/IconButton/IconButton'
import Image from 'next/image'

export const PostHeader = (props: {img: string}) => {
    return (
        <PostHeaderWrapper>
            <div>
                <span className={'avatar'}>
                    <Image src={props.img} alt={'user-avatar'} width={36} height={36} />
                </span>
                <p>URLProfiele</p>
                <span>22 Minutes ago</span>
            </div>
            <IconButton>
                <PopOverIcon />
            </IconButton>
        </PostHeaderWrapper>
    )
}
