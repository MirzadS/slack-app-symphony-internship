import React from 'react';
import Button from './styles';

interface ButtonWrapperProps {
    buttonName: string;
    sign: string;
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

function ButtonWrapper({ buttonName, sign, toggle }: ButtonWrapperProps) {
    return (
        <Button onClick={() => toggle((prev) => !prev)}>
            <span>{sign}</span>
            {buttonName}
        </Button>
    );
}

export default ButtonWrapper;
