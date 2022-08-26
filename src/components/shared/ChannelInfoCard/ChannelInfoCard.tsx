import React from 'react';
import { format } from 'date-fns';
import { Card, BoxDetails } from './styles';

function ChannelInfoCard({ channelInfo }: any) {
    return (
        <Card>
            <h2>Channel Details</h2>
            <BoxDetails>
                <span>NAME</span>
                <span>{channelInfo.name}</span>
            </BoxDetails>
            <BoxDetails>
                <span>DATE CREATED</span>
                <span>{format(new Date(channelInfo.date_created * 1000), 'dd LLL yyyy')}</span>
            </BoxDetails>
            <BoxDetails>
                <span>CREATED BY</span>
                <span>{channelInfo.created_by}</span>
            </BoxDetails>
            <BoxDetails>
                <span>DESCRIPTION</span>
                <span>{channelInfo.description}</span>
            </BoxDetails>
            <BoxDetails>
                <span>TOPIC</span>
                <span>{channelInfo.topic}</span>
            </BoxDetails>
        </Card>
    );
}

export default ChannelInfoCard;
