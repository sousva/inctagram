import React from 'react'
import {getHomeLayout} from '_app/Layouts/HomeLayout'
import {PostsList} from 'widgets/PostsList/PostsList'

const data = {
    totalCount: 10,
    pagesCount: 2,
    page: 1,
    pageSize: 10,
    items: [
        {
            id: 1,
            description: 'description',
            location: 'location',
            images: [
                {
                    url: 'https://example.com/image.jpg',
                    width: 300,
                    height: 300,
                    fileSize: 300,
                    uploadId: 'string',
                },
            ],
            createdAt: '2023-07-14T14:50:09.268Z',
            updatedAt: '2023-07-14T14:50:09.268Z',
        },
    ],
}

export default function Home() {
    return (
        <div>
            <PostsList posts={data.items} />
        </div>
    )
}

Home.getLayout = getHomeLayout
