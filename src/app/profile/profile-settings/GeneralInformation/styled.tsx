import styled from 'styled-components'

export const GeneralInformationWrapper = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 720px;

    .buttonSave {
        align-self: flex-end;
        margin-top: 20px;
    }

    .avatarImage {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .buttonProfile {
        margin-top: 20px;
    }

    .inputText {
        width: 500px;
    }

    .formSection {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .circleImage {
        width: 192px;
        height: 192px;
        border-radius: 50%;
        background-color: #171717;
        position: relative;
    }

    .photoIcon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`
