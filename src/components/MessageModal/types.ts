export type FormValues = {
    channelIDForm?: string;
    titleForm: string;
    messageForm: string;
};

export interface ModalProps {
    isVisible: boolean;
    hide: () => void;
    channelID?: string;
    setCorrectModal: React.Dispatch<React.SetStateAction<boolean>>;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export enum MESSAGE_TYPE {
    HEADER = 'header',
    SECTION = 'section',
}

export interface MessageBlock {
    type: MESSAGE_TYPE;
    text: MessageTextProps;
}

export interface MessageTextProps {
    type: string;
    text: string;
}
