'use client'
import React, {useState} from 'react'
import {AuthContainer} from 'common/components/AuthContainer/AuthContainer'
import {Loader} from 'common/components/Loader/Loader'
import {AuthPageStyled, RegistrationModalContent} from 'common/styles/RegistrationPage'
import {IconButton} from 'common/components/IconButton/IconButton'
import GoogleIcon from 'common/assets/icons/google.svg'
import GithubBlack from 'common/assets/icons/githubBlack.svg'
import GithubWhite from 'common/assets/icons/githubWhite.svg'
import {InputText} from 'common/components/InputText/InputText'
import {InputPassword} from 'common/components/InputPassword/InputPassword'
import {Button} from 'common/components/Button/Button'
import Link from 'next/link'
import {PATH} from 'shared/constants/PATH'
import {Modal} from 'common/components/Modal/BaseModal'
import {useAppSelector} from 'shared/hooks/reduxHooks'
import {useRegistrationForm} from 'features/auth/RegistrationForm/UseRegistrationForm'

export const RegistrationForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const theme = useAppSelector(state => state.app.theme)
    const {isLoading, register, handleSubmit, errors, getValues, reset} = useRegistrationForm(setIsModalOpen)

    const handleModalClose = () => {
        setIsModalOpen(false)
        reset()
    }
    return (
        <AuthContainer>
            {isLoading && <Loader />}
            <AuthPageStyled>
                <h1>Sign Up</h1>
                <div>
                    <IconButton>
                        <GoogleIcon />
                        todo
                    </IconButton>
                    <IconButton>{theme === 'light' ? <GithubBlack /> : <GithubWhite />}</IconButton>
                </div>
                <form onSubmit={handleSubmit}>
                    <InputText label={'UserName'} type={'text'} {...register('userName')} error={errors.userName} />
                    <InputText label={'Email'} type={'email'} {...register('email')} error={errors.email} />
                    <InputPassword label={'Password'} {...register('password')} error={errors.password} />
                    <InputPassword
                        label={'Password confirmation'}
                        {...register('passwordConfirmation')}
                        error={errors.passwordConfirmation}
                    />
                    <Button type={'submit'} disabled={isLoading}>
                        Submit
                    </Button>
                    <p>Do you have an account?</p>
                    <Link href={PATH.LOGIN}>
                        <Button type={'button'} variant={'text'}>
                            Sign In
                        </Button>
                    </Link>
                </form>
            </AuthPageStyled>
            <Modal handleClose={handleModalClose} isOpen={isModalOpen} title={'Email sent'}>
                <RegistrationModalContent>
                    <div>
                        We have sent a link to confirm your email to <span>{getValues('email')}</span>
                    </div>
                    <Button onClick={handleModalClose}>OK</Button>
                </RegistrationModalContent>
            </Modal>
        </AuthContainer>
    )
}
