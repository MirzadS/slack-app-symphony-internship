export type FormValues = {
    channelNameForm: string;
    channelCheckboxForm: boolean;
};

export interface ModalProps {
    isVisible: boolean;
    hide: () => void;
}
