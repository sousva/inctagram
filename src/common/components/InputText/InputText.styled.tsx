import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;

    width: 300px;

    textarea {
        resize: none;
    }

    input,
    textarea {
        background: none;
        color: ${props => props.theme.textColor};
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 100%;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid mix(white, #424242, 70%);

        &:focus {
            outline: none;
        }

        &:focus ~ label,
        &:valid ~ label {
            top: -3px;
            font-size: 12px;
            color: ${props => props.theme.palette.primary['100']};
            letter-spacing: 1px;
        }

        &:focus ~ .bar:before {
            width: 100%;
        }
    }

    input[type='password'] {
        letter-spacing: 0.3em;
    }

    label {
        color: ${props => props.theme.textColor};
        font-size: 16px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: 300ms ease all;
    }

    .bar {
        position: relative;
        display: block;
        width: 100%;

        &:before {
            content: '';
            height: 2px;
            width: 0;
            bottom: 0;
            position: absolute;
            background: ${props => props.theme.palette.primary['300']};
            transition: 300ms ease all;
            left: 0;
        }
    }
`
