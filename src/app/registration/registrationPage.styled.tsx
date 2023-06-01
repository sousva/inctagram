import styled from 'styled-components'

export const RegistrationPageStyled = styled.section`
    display: flex;
    justify-content: center;
    text-align: center;

    .content {
        width: 100%;
        max-width: 378px;
        padding: 23px;
        border: 1px solid ${props => props.theme.palette.dark['300']};
        background-color: ${props => props.theme.palette.dark['500']};

        h1 {
            font-family: Inter, sans-serif;
            font-weight: 700;
            font-size: 20px;
            line-height: 36px;

            color: ${props => props.theme.palette.light['100']};
            margin-top: 0;
            margin-bottom: 13px;
        }

        h1 + div {
            display: flex;
            justify-content: center;
            gap: 60px;

            margin-bottom: 22px;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 18px;

            //https://wp-kama.ru/id_5875/30-css-selektorov.html
            input[type='password'] > button {
                width: 100%;
            }

            p {
                margin: 0;
            }
        }
    }
`
