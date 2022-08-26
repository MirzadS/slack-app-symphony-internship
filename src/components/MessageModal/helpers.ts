import { MESSAGE_TYPE, MessageBlock } from './types';

const helperMessageModal = (title: string, message: string): MessageBlock[] => {
    if (title) {
        return [
            {
                type: MESSAGE_TYPE.HEADER,
                text: {
                    type: 'plain_text',
                    text: title,
                },
            },
            {
                type: MESSAGE_TYPE.SECTION,
                text: {
                    type: 'plain_text',
                    text: message,
                },
            },
        ];
    }

    return [
        {
            type: MESSAGE_TYPE.SECTION,
            text: {
                type: 'plain_text',
                text: message,
            },
        },
    ];
};

export default helperMessageModal;
