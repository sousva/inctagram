import {NextPage} from 'next'
import {PropsWithChildren} from 'react'

export const Layout: NextPage<PropsWithChildren> = props => {
    const {children} = props

    return <div>{children}</div>
}
