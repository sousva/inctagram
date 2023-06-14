import styled from 'styled-components'

export const GeneralInformationWrapper = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;

    .buttonSave {
        align-self: flex-end;
    }

    .avatarImage {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .formSection {
        display: flex;
        flex-direction: row;
    }

    .inputSection {
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
