/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import ChannelService from '../../services/ChannelService/ChannelService';
import { CHANNELS } from '../../routes/constants/constants';
import ChannelInfoCard from '../shared/ChannelInfoCard/ChannelInfoCard';
import { ChannelFoundProps, ChannelInfoProps } from '../../models/Channel';
import { ChannelPage, Main, BackToChannels, BackIcon } from './styles';
import NavigationSideBar from '../shared/NavigationSideBar/NavigationSideBar';
import Header from '../shared/Header/Header';
import MembersTable from '../shared/MembersTable/MembersTable';
import MessageModal from '../MessageModal/MessageModal';
import { Spinner, SpinnerDiv } from '../shared/Spinner/Spinner';

function ChannelInfo() {
    const { id } = useParams<string>();
    const navigate = useNavigate();

    const [messageModal, setMessageModal] = useState(false);

    const [channelFound, setChannelFound] = useState<ChannelFoundProps>();

    const [basicChannelInfo, setBasicChannelInfo] = useState<ChannelInfoProps>();
    const [memberIdArray, setMemberIdArray] = useState<string[]>([]);

    const [correctModal, setCorrectModal] = useState(false);

    const [channelInfo, setChannelInfo] = useState<ChannelInfoProps>();
    const [usersList, setUsersList] = useState<Object[]>();

    const getUsersList = async () => {
        const users = await ChannelService.getUsersList();

        const listOfMembers = memberIdArray.map((itm: string) => ({
            ...users.find((item: any) => item.id === itm),
        }));

        const found = listOfMembers.find(
            (element: any) => element.id === (basicChannelInfo as ChannelInfoProps).created_by
        );

        setChannelInfo({ ...basicChannelInfo, created_by: found.real_name } as ChannelInfoProps);

        setUsersList(listOfMembers);
        setChannelFound({ ok: true });
    };

    const getMembersInfo = async () => {
        const members = await ChannelService.getMembers(basicChannelInfo);
        setMemberIdArray(members);
    };

    const getBasicChannelInformation = async () => {
        const info = await ChannelService.getChannelInfo(id || '');

        if (!info.ok) {
            setChannelFound({ ok: false });
        } else {
            setBasicChannelInfo({
                id: info.channel.id,
                ok: info.ok,
                name: info.channel.name,
                date_created: info.channel.created,
                created_by: info.channel.creator,
                description: info.channel.purpose.value,
                topic: info.channel.topic.value,
            });
        }
    };

    useEffect(() => {
        getBasicChannelInformation();
    }, []);

    useEffect(() => {
        if (basicChannelInfo?.ok) {
            getMembersInfo();
        }
    }, [basicChannelInfo?.ok]);

    useEffect(() => {
        getUsersList();
    }, [memberIdArray?.length > 0]);

    const navigateToChannels = () => {
        navigate(CHANNELS);
    };

    return (
        <div>
            {channelFound ? (
                channelFound.ok ? (
                    <ChannelPage>
                        <NavigationSideBar onButtonClick={setMessageModal} setCorrectModal={setCorrectModal} />
                        <Main>
                            <BackToChannels onClick={navigateToChannels}>
                                <BackIcon />
                                <span>Back To Channels</span>
                            </BackToChannels>

                            <Header
                                title={(channelInfo as ChannelInfoProps).name}
                                buttonName="Post Message"
                                onButtonClick={setMessageModal}
                            />

                            <ChannelInfoCard channelInfo={channelInfo} />
                            <MembersTable listOfMembers={usersList} />
                        </Main>

                        {correctModal ? (
                            <MessageModal
                                isVisible={messageModal}
                                hide={() => setMessageModal((prev) => !prev)}
                                setCorrectModal={setCorrectModal}
                            />
                        ) : (
                            <MessageModal
                                isVisible={messageModal}
                                hide={() => setMessageModal((prev) => !prev)}
                                channelID={id}
                                setCorrectModal={setCorrectModal}
                            />
                        )}
                    </ChannelPage>
                ) : (
                    <Navigate to={CHANNELS} replace />
                )
            ) : (
                <SpinnerDiv>
                    <Spinner />
                </SpinnerDiv>
            )}
        </div>
    );
}

export default ChannelInfo;
