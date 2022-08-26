import { useState } from 'react';

const useModal = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    function toggle(): void {
        setIsVisible(!isVisible);
    }

    return {
        isVisible,
        toggle,
    };
};

export default useModal;
