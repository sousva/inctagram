import styled from 'styled-components'

export const AvatarFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 200px;

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 192px;
        border-radius: 50%;
        margin-bottom: 30px;
        background-color: ${props =>
            props.theme.name === 'dark' ? props.theme.palette.dark['500'] : props.theme.palette.light['500']};
    }

    button {
        line-height: 24px;
    }
`
