/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import ChannelService from '../../services/ChannelService/ChannelService';
import NavigationSideBar from '../shared/NavigationSideBar/NavigationSideBar';
import ChannelsTable from '../shared/ChannelsTable/ChannelsTable';
import Modal from '../ChannelsModal/ChannelsModal';
import MessageModal from '../MessageModal/MessageModal';
import useModal from '../../utils/useModal';
import Header from '../shared/Header/Header';
import { ChannelProps } from '../../models/Channel';

import { ChannelsPage, Main, Section } from './styles';
import { SpinnerDiv, Spinner } from '../shared/Spinner/Spinner';

function Channels() {
    const [channels, setChannels] = useState<ChannelProps[]>([]);

    const { isVisible, toggle } = useModal();
    const [messageModal, setMessageModal] = useState(false);

    const getAllChannelsInfo = async () => {
        const response = await ChannelService.getAllChannels();

        setChannels(response);
    };

    useEffect(() => {
        getAllChannelsInfo();
    }, []);

    return (
        <div>
            {channels ? (
                <ChannelsPage>
                    <NavigationSideBar onButtonClick={setMessageModal} />
                    <Main>
                        <Header title="Channels" buttonName="Create Channel" onButtonClick={toggle} />

                        <Section>
                            <ChannelsTable channels={channels} />
                        </Section>
                    </Main>
                    <Modal isVisible={isVisible} hide={toggle} />
                    <MessageModal isVisible={messageModal} hide={() => setMessageModal((prev) => !prev)} />
                </ChannelsPage>
            ) : (
                <SpinnerDiv>
                    <Spinner />
                </SpinnerDiv>
            )}
        </div>
    );
}

export default Channels;
