import React from 'react';
import HeaderBox from './styles';
import ButtonWrapper from '../ButtonWrapper/ButtonWrapper';
import HeaderProp from './types';

function Header({ title, buttonName, onButtonClick }: HeaderProp) {
    return (
        <HeaderBox>
            <span>{title}</span>
            <ButtonWrapper toggle={onButtonClick} buttonName={buttonName} sign="+" />
        </HeaderBox>
    );
}

export default Header;
