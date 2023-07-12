import styled from 'styled-components'

export const EditorButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    gap: 50px;
    position: absolute;
    bottom: 10px;

    .popUpBtn {
        display: flex;
        gap: 50px;
    }
`

export const SelectWrapper = styled.div`
    display: ${props => (props.hidden ? 'flex' : 'none')};

    flex-direction: column;
    background-color: ${props => props.theme.palette.dark[500]};
    padding: 10px;
    position: absolute;
    top: -140px;
`
export const ZoomWrapper = styled.div`
    display: ${props => (props.hidden ? 'flex' : 'none')};
    flex-direction: column;
    background-color: ${props => props.theme.palette.dark[500]};
    padding: 10px;
    position: absolute;
    left: 100px;
    top: -10px;
`
