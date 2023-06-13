import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    Button {
        align-self: flex-end;
    }
`
export const Container = styled.div`
    display: flex;
    margin: 20px;
    border-bottom: 0.5px solid #4c4c4c;
`
export const CircleSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const InputsSection = styled.div`
    margin-left: 70px;
`
export const Circle = styled.div`
    width: 192px;
    height: 192px;
    border-radius: 50%;
    background-color: #171717;
    position: relative;
`

export const ImageWrapper = styled.span`
    position: absolute;
    left: 80px;
    top: 80px;
    cursor: pointer;
`
