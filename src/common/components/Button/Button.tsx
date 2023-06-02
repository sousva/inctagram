import styled, {css} from 'styled-components'

export const Button = styled.button<{variant?: 'contained' | 'outlined' | 'text'}>`
    border-radius: 2px;
    padding: 6px 24px;
    cursor: pointer;
    border: none;
    font-size: 16px;
    font-weight: 600;
    font-family: Inter, sans-serif;
    letter-spacing: 0.7px;

    ${props => {
        switch (props.variant) {
            case 'contained':
                return css`
                    background-color: ${props => props.theme.palette.light[100]};
                    color: ${props => props.theme.palette.dark[900]};

                    &:active {
                        background-color: ${props => props.theme.palette.primary[700]};
                    }

                    &:hover {
                        background-color: ${props => props.theme.palette.light[100]};
                        color: ${props => props.theme.palette.dark[300]};
                    }

                    &:focus {
                        background-color: ${props => props.theme.palette.light[100]};
                        color: ${props => props.theme.palette.dark[900]};
                        border: 2px solid ${props => props.theme.palette.primary[700]};
                    }
                    &:disabled {
                        background-color: ${props => props.theme.palette.light[900]};
                        color: ${props => props.theme.palette.dark[100]};
                    }
                `
            case 'text':
                return css`
                    background-color: inherit;
                    color: ${props => props.theme.palette.primary[500]};

                    &:active {
                        color: ${props => props.theme.palette.primary[700]};
                    }

                    &:hover {
                        color: ${props => props.theme.palette.primary[100]};
                    }

                    &:focus {
                        color: ${props => props.theme.palette.primary[500]};
                        border: 2px solid ${props => props.theme.palette.primary[700]};
                    }
                    &:disabled {
                        color: ${props => props.theme.palette.primary[900]};
                    }
                `
            case 'outlined':
                return css`
                    background-color: inherit;
                    color: ${props => props.theme.palette.primary[500]};
                    border: 1px solid ${props => props.theme.palette.primary[500]};

                    &:active {
                        color: ${props => props.theme.palette.primary[700]};
                    }

                    &:hover {
                        border: 1px solid ${props => props.theme.palette.primary[100]};
                        color: ${props => props.theme.palette.primary[100]};
                    }

                    &:focus {
                        color: ${props => props.theme.palette.primary[700]};
                        border: 2px solid ${props => props.theme.palette.primary[700]};
                    }
                    &:disabled {
                        border: 2px solid ${props => props.theme.palette.primary[900]};
                        color: ${props => props.theme.palette.primary[900]};
                    }
                `
            default:
                return css`
                    background-color: ${props => props.theme.palette.primary[500]};
                    color: ${props => props.theme.palette.light[100]};

                    &:active {
                        background-color: ${props => props.theme.palette.primary[700]};
                        color: ${props => props.theme.palette.light[500]};
                    }

                    &:hover {
                        background-color: ${props => props.theme.palette.primary[100]};
                        color: ${props => props.theme.palette.light[100]};
                    }

                    &:focus {
                        background-color: ${props => props.theme.palette.primary[700]};
                        color: ${props => props.theme.palette.light[100]};
                    }
                    &:disabled {
                        background-color: ${props => props.theme.palette.primary[900]};
                        color: ${props => props.theme.palette.light[900]};
                    }
                `
        }
    }}
`
