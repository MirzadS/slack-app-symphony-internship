/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { ChannelProps, ChannelTableProps } from '../../../models/Channel';

import { TableContent, Table, TableBody, TableHeader, TableRow, TableData } from './styles';

const ChannelsTable = ({ channels }: ChannelTableProps) => {
    const navigate = useNavigate();

    const navigateToSpecificChannel = (channelID: string) => {
        navigate(`/channel/${channelID}`);
    };
    return (
        <>
            <Table>
                <thead>
                    <TableRow>
                        <TableHeader>NAME</TableHeader>
                        <TableHeader>DESCRIPTION</TableHeader>
                        <TableHeader>DATE CREATED</TableHeader>
                    </TableRow>
                </thead>
            </Table>

            <TableContent>
                <Table>
                    <TableBody>
                        {channels?.length > 0
                            ? channels?.map(({ id, name, created, description }: ChannelProps) => (
                                  <TableRow key={id} onClick={() => navigateToSpecificChannel(id)}>
                                      <TableData>{name}</TableData>
                                      <TableData>{description}</TableData>
                                      <TableData>{format(new Date(created * 1000), 'LLL dd,yyyy')}</TableData>
                                  </TableRow>
                              ))
                            : null}
                    </TableBody>
                </Table>
            </TableContent>
        </>
    );
};

export default ChannelsTable;
