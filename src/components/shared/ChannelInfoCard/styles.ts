import styled from 'styled-components';

export const Card = styled.div`
    padding: 37px 0 35px 34px;
    background: #fff;
    height: 320px;
    border: 1px solid #dad9d9;
    box-shadow: 0px 20px 24px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    margin-bottom: 40px;

    h2 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 27px;
        color: #000000;
        margin-bottom: 41px;
    }
`;

export const BoxDetails = styled.div`
    font-family: 'Inter';
    font-style: normal;
    display: flex;
    gap: 30px;
    margin-top: 18px;

    span {
        &:nth-child(1) {
            font-weight: 400;
            font-size: 13px;
            line-height: 18px;
            color: #787878;
            width: 136px;
        }

        &:nth-child(2) {
            font-weight: 500;
            font-size: 13px;
            line-height: 22px;
            color: #2c2c2c;
        }
    }
`;
