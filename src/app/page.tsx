'use client'
import React, {useEffect} from 'react'
import {HomePageStyled} from 'app/styled'
import {Button} from 'common/components/Button/Button'
import Link from 'next/link'
import {PATH} from 'app/path'
import {useAuthMeMutation} from 'redux/api/authAPI'
import {useAppDispatch, useAppSelector} from 'common/hooks/reduxHooks'
import {SetUser} from 'redux/userSlice'
import {useRouter} from 'next/navigation'

export default function Page() {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.userAuth)
    const router = useRouter()
    const [data] = useAuthMeMutation()

    const onAuth = async () => {
        await data()
            .unwrap()
            .then(data => {
                dispatch(SetUser(data))
                router.replace(PATH.HOME)
            })
            .catch(() => {
                router.replace(PATH.LOGIN)
            })
    }

    useEffect(() => {
        onAuth()
    }, [user.userId])

    return (
        <HomePageStyled>
            {user.userId !== null ? (
                <>
                    <h1>Home Page</h1>
                    <Link href={PATH.PROFILE_SETTINGS}>
                        <Button variant={'contained'}>Profile Settings</Button>
                    </Link>
                    <div>
                        <h2>HELLO: {user.userName}</h2>
                    </div>
                </>
            ) : (
                <h1>...Loading</h1>
            )}
        </HomePageStyled>
    )
}
