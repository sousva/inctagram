import {NextPage} from 'next'
import {PropsWithChildren} from 'react'
import {Container} from 'common/components/Container/Container'

export const Layout: NextPage<PropsWithChildren> = props => {
    const {children} = props

    return <Container>{children}</Container>
}
