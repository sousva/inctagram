import styled from 'styled-components'

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 0.1fr);
    grid-column-gap: 0;
    grid-row-gap: 0;

    #imageSection {
        grid-area: 1 / 1 / 2 / 2;
    }

    #inputsSection {
        grid-area: 1 / 2 / 2 / 3;
    }

    Button {
        grid-area: 2 / 2 / 3 / 3;
    }
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
