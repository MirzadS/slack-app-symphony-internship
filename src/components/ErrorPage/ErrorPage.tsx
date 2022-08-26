import React from 'react';
import styled from 'styled-components';

interface ImgProp {
    bgImage: string;
}

const Img = styled.div<ImgProp>`
    background-image: ${(props) => `url("/images/${props.bgImage}")`};
    height: 100vh;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

function ErrorPage({ bgImage }: any) {
    return <Img bgImage={bgImage} />;
}

export default ErrorPage;
