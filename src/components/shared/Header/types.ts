interface HeaderProp {
    title: string | undefined;
    buttonName: string;
    onButtonClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export default HeaderProp;
