import Image from 'next/image'
import {NextPageWithLayout} from './_app'
import {getLayout} from 'common/Layout/BaseLayout/BaseLayout'

const Home: NextPageWithLayout = () => (
    <div>
        <Image src='/next.svg' alt='Next.js Logo' width={180} height={37} priority />
    </div>
)

Home.getLayout = getLayout
export default Home
