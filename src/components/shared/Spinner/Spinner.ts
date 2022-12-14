import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
    border-top: 2px solid grey;
    border-right: 2px solid grey;
    border-bottom: 2px solid grey;
    border-left: 4px solid black;
    background: transparent;
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

export const SpinnerDiv = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;
