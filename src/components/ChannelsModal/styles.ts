import styled from 'styled-components';

interface Props {
    modalHeight: string;
}

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(44px);
`;

export const ModalWrapper = styled.div<Props>`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    width: 748px;
    height: ${(props) => props.modalHeight};
    padding: 52px 30px 30px 30px;
    outline: 0;
    background: #fff;
    border-radius: 10px;
`;

export const Title = styled.h1`
    margin-bottom: 35px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 42px;
    color: #000000;
`;

export const Form = styled.form``;

export const FormData = styled.div`
    display: flex;
    flex-direction: column;
    color: #333333;

    label {
        font-family: 'Inter';
        font-style: medium;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 10px;
    }

    input {
        height: 35px;
        background: #fffefe;
        border: 1px solid #9e9e9e;
        border-radius: 10px;
        padding: 1px 8px;
        font-size: 15px;
    }
`;

export const ErrorBanner = styled.div`
    width: 100%;
    height: 90px;
    margin-top: 60px;
    background: rgba(222, 7, 28, 0.08);
    border: 1px solid #de071c;
    border-radius: 10px;

    span {
        font-family: 'Inter';
        font-style: normal;
        color: #333333;
        display: flex;
        flex-direction: column;
        margin-left: 30px;
        margin-top: 18px;

        &:nth-child(1) {
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
        }
        &:nth-child(2) {
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
        }
    }
`;

export const FormButtons = styled.div`
    position: absolute;
    bottom: 30px;
    right: 30px;

    input {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        border-radius: 10px;
        cursor: pointer;
        box-sizing: border-box;
        height: 35px;

        &:nth-child(1) {
            color: #2676ef;
            width: 131px;
            background: #fff;

            border: 1px solid #2676ef;
            filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.06));
        }

        &:nth-child(2) {
            color: #ffffff;
            width: 150px;
            background: #2676ef;
            margin-left: 18px;
            border: none;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
        }
    }
`;

export const Button = styled.div`
    font-size: 0.9rem;
    font-weight: 700;
    border: none;
    border-radius: 3px;
    padding: 0.3rem 1rem;
    margin-left: 0.5rem;
`;
export const ButtonDefault = styled.div`
    background: #247ba0;
    color: #fff;
`;

export const InputCheckbox = styled.div`
    margin-top: 25px;
    display: flex;
    align-items: center;
    color: black;
    gap: 10px;

    input {
        border: 1px solid #959595;
        border-radius: 4px;
        width: 18px;
    }

    label {
        margin-bottom: 0;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #333333;
    }
`;

export const ErrMsg = styled.span`
    display: inline-block;
    padding-top: 7px;
    padding-left: 5px;
    color: red;
`;
