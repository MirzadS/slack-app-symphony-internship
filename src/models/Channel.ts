export interface NewChannelProps {
    channelName: string;
    isPrivate?: boolean;
}

export interface ChannelProps {
    id: string;
    name: string;
    created: number;
    description: string;
}

export interface ChannelTableProps {
    channels: ChannelProps[];
}

export interface ChannelInfoProps {
    id: string;
    ok: boolean;
    name: string;
    date_created: any;
    created_by: number;
    description: string;
    topic: string;
}

export interface ChannelFoundProps {
    ok: boolean;
}

export interface CreateNewChannelProps {
    ok: boolean;
    error: string;
}
