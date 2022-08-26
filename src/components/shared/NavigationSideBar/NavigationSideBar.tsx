/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CHANNELS } from '../../../routes/constants/constants';
import UserService from '../../../services/UserService/UserService';
import AuthHelpers from '../../../utils/AuthHelpers';
import { SideBar, UserProfileImg, SideMenu, HomeIcon, HashIcon, ChatIcon, SignOut } from './styles';

interface NavProp {
    onButtonClick: React.Dispatch<React.SetStateAction<boolean>>;
    setCorrectModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavigationSideBar({ onButtonClick, setCorrectModal }: NavProp) {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState<any>(null);

    const getUserInfo = async () => {
        const response = await UserService.getUserInfo();
        setUserInfo(response);
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    const setAll = () => {
        setCorrectModal(true);
        onButtonClick((prev) => !prev);
    };

    return (
        <SideBar>
            <UserProfileImg image={userInfo?.picture} />
            <SideMenu>
                <HomeIcon onClick={() => navigate(CHANNELS)} />
                <HashIcon onClick={() => navigate(CHANNELS)} />
                <ChatIcon onClick={setAll} />
            </SideMenu>
            <SignOut onClick={AuthHelpers.removeToken} />
        </SideBar>
    );
}

NavigationSideBar.defaultProps = {
    setCorrectModal: () => null,
};

export default NavigationSideBar;
