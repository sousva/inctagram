'use client'
import React from 'react'
import {AuthContainer} from 'common/components/AuthContainer/AuthContainer'
import {Button} from 'common/components/Button/Button'
import re from 'common/assets/pictures/congratulation.png'
import Image from 'next/image'
import {getLayoutWithHeader} from 'common/Layouts/LayoutWithHeader'
import {MergeAccountsPageWrapper} from 'common/styles/MergeAccountsPage'

export default function MergeAccountsPage() {
    return (
        <AuthContainer>
            <MergeAccountsPageWrapper>
                <h1>Merger of Accounts</h1>
                <p>The user with email Epam@epam.com is already in the system. Could we merge this accounts?</p>
                <Button variant={'outlined'}>Yes, merge</Button>
                <Button variant={'outlined'}>No</Button>
                <span>
                    <Image src={re} alt={'re'} />
                </span>
            </MergeAccountsPageWrapper>
        </AuthContainer>
    )
}
MergeAccountsPage.getLayout = getLayoutWithHeader
