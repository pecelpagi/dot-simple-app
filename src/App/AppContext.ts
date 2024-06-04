import React from 'react';

interface IDefaultValue {
    provinces: { id: number, name: string }[];
    loading: boolean,
    onFetchProvince: () => void,
    onSetLoading: (loading: boolean) => void,
}

const defaultValue: IDefaultValue = {
    provinces: [],
    loading: false,
    onFetchProvince: () => {},
    onSetLoading: (loading) => {}
}

const AppContext = React.createContext(defaultValue);

export default AppContext;