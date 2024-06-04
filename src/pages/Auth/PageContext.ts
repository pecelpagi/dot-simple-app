import React from 'react';

interface IDefaultValue {
    apiKey: string;
    error: string;
    onChangeApiKey: (val: string) => void,
    onSubmit: (e: React.FormEvent) => void,
}

const defaultValue: IDefaultValue = {
    apiKey: "",
    error: "",
    onChangeApiKey: () => {},
    onSubmit: () => {},
}

const PageContext = React.createContext(defaultValue);

export default PageContext;