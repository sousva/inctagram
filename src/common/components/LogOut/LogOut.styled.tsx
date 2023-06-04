import styled from 'styled-components'

export const LogOutWrapper = styled.div`
    max-width: 438px;
    margin: 0 auto;
    background: #333333;
    z-index: 1;
    position: relative;

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 24px;
        margin: 42px 24px 0 24px;
    }
`

export const LogOutTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 24px 0 24px;
    padding-top: 12px;

    h4 {
        margin: 0;
        padding: 0;
        font-style: normal;
        font-weight: 700;
        font-size: 21px;
        line-height: 36px;
    }

    &::after {
        content: '';
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        height: 1px;
        background: #4c4c4c;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 25px;
    justify-content: flex-end;
    margin: 30px 24px 0 24px;
    padding-bottom: 36px;

    button {
        width: 96px;
        height: 36px;
    }
`
