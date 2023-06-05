import styled from 'styled-components'

export const RegistrationPageStyled = styled.div`
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
          
            input[type='password'] > button {
                width: 100%;
            }

            p {
                margin: 0;
            }
        }
    }
`
