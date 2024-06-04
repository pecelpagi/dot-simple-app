import React from 'react';

interface IDefaultValue {
    provinces: { id: number, name: string }[];
    loading: boolean,
    onSetLoading: (loading: boolean) => void,
}

const defaultValue: IDefaultValue = {
    provinces: [],
    loading: false,
    onSetLoading: (loading) => {}
}

const AppContext = React.createContext(defaultValue);

export default AppContext;