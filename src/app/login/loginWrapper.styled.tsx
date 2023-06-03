import styled from 'styled-components'

export const LoginWrapperStyled = styled.div`
  h1 {
    font-weight: 700;
    font-size: 20px;
  }
  a {
    text-align: end;
    text-decoration: none;
    color: #BDC1C7;
  }
  .link {
    align-items: end;
    margin: 60px 0 24px 0;
  }
  .inputLogin {
    margin-bottom: 36px;
  }
  .iconWrapper {
    display: flex;
    justify-content: center;
    gap: 60px
  }
  .button {
    width: 100%;
    margin-bottom: 18px;
  }
  .button:last-child {
    margin-bottom: 0;
  }
`