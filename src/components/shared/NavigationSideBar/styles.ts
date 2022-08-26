import { HiOutlineChatAlt, HiHashtag, HiOutlineHome, HiOutlineLogout } from 'react-icons/hi';
import styled from 'styled-components';

interface Props {
    image: string;
}

export const SideBar = styled.div`
    width: 89px;
    height: 750px;
    margin-left: 40px;
    margin-top: 55px;
    background: #ffffff;
    box-shadow: 10px 10px 44px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    position: relative;
`;

export const UserProfileImg = styled.img<Props>`
    position: absolute;
    width: 54px;
    height: 54px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
    top: 6.04%;
    bottom: 88.02%;
    border-radius: 50%;
    background: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const SideMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 138px;
    gap: 24px;
    font-size: 26px;
    position: absolute;
    left: 37.08%;
    right: 34.83%;
    top: 15.48%;
    bottom: 69.88%;
`;

export const HomeIcon = styled(HiOutlineHome)`
    cursor: pointer;
`;

export const HashIcon = styled(HiHashtag)`
    cursor: pointer;
`;

export const ChatIcon = styled(HiOutlineChatAlt)`
    cursor: pointer;
`;
export const SignOut = styled(HiOutlineLogout)`
    position: absolute;
    bottom: 15px;
    left: 0;
    right: 0;
    width: 100%;
    height: 30px;
    cursor: pointer;
`;
