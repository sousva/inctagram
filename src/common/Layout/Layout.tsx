import {NextPage} from 'next'
import {PropsWithChildren} from 'react'
import {Container} from 'common/components/Container/Container'
import {Header} from 'common/components'

export const Layout: NextPage<PropsWithChildren> = props => {
    const {children} = props

    return (
        <Container>
            <Header />
            {children}
        </Container>
    )
}
