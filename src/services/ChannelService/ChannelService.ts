/* eslint-disable no-debugger */

import { NewChannelProps, ChannelProps, CreateNewChannelProps } from '../../models/Channel';
import getBasicChannelDetails from '../../utils/ChannelHelpers';
import axios from '../../axiosInstance/axiosInstance';

class ChannelService {
    static async getAllChannels(): Promise<ChannelProps[]> {
        const response = await axios.get(`/conversations.list?types=private_channel, public_channel`).then((res) => {
            return getBasicChannelDetails(res?.data?.channels);
        });

        return response;
    }

    static async getUsersList(): Promise<any> {
        const usersInfo = await axios.get(`/users.list`);

        return usersInfo.data.members;
    }

    static async getMembers(basicChannelInfo: any): Promise<string[]> {
        const groupOfMembers = await axios.get(`/conversations.members`, { params: { channel: basicChannelInfo.id } });

        return groupOfMembers.data.members;
    }

    static async getChannelInfo(channelID: string): Promise<any> {
        const res = await axios.get(`/conversations.info`, { params: { channel: channelID } });

        return res.data;
    }

    static async createNewChannel({ channelName, isPrivate = false }: NewChannelProps): Promise<CreateNewChannelProps> {
        const data = {
            name: channelName,
            is_private: isPrivate,
        };

        const response = await axios.post(`/conversations.create`, data);

        return { ok: response.data.ok, error: response?.data?.error };
    }
}

export default ChannelService;
