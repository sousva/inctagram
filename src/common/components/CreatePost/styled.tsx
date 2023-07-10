import styled from 'styled-components'

export const CreatePostWrapper = styled.div`
    li {
        display: flex;
        align-items: center;
        gap: 15px;
        margin: 0 auto;
        list-style-type: none;
    }
`
export const ModalContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px;
`

export const ButtonWrapper = styled.div`
    display: inherit;
    flex-direction: inherit;
    margin: 0 auto;
    gap: inherit;
    max-width: 250px;
`

export const EmptyImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 200px;
    height: 250px;
    background-color: #171717;
`

export const EditorWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    height: 550px;
`

export const CanvasContainer = styled.div<{width: string; height: string}>`
    width: 100%;
    height: 465px;
`
