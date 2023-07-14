import React from 'react'
import Image from 'next/image'

export const PostImage = (props: {img: string}) => {
    return <Image src={props.img} alt={'Post-Image'} height={500} width={500} />
}
