import axios from '../../axiosInstance/axiosInstance';

class MessageService {
    static async sendMessage({ channelID, blocks }: any): Promise<boolean> {
        const response = await axios.post(
            `https://slack.com/api/chat.postMessage?channel=${channelID}&blocks=${blocks}`
        );

        return response.data.ok;
    }

    static async getAllChannelNamesAndIDs(): Promise<any> {
        const response = await axios.get(`/conversations.list?types=private_channel, public_channel`).then((res) => {
            return res?.data?.channels.map((elem: any) => ({
                id: elem.id,
                name: elem.name,
            }));
        });

        return response;
    }
}

export default MessageService;
