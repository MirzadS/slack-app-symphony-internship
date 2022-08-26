import { ChannelProps } from '../models/Channel';

const getBasicChannelDetails = (data: Array<Object>): ChannelProps[] => {
    return data.map((elem: any) => ({
        id: elem.id,
        name: elem.name,
        created: elem.created,
        description: elem.purpose.value,
    }));
};

export default getBasicChannelDetails;
