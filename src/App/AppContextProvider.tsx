import React, { Component, ReactNode } from 'react'
import AppContext from './AppContext';
import * as apiServiceUtility from './api-service.utils';

interface IAppContextProviderProps {
    children: ReactNode;
};
interface IAppContextProviderState {
    provinces: { id: number, name: string }[];
    loading: boolean
};

class AppContextProvider extends Component<IAppContextProviderProps, IAppContextProviderState> {
    state = {
        provinces: [],
        loading: false,
    }

    setState: any = this.setState.bind(this);

    componentDidMount(): void {
        this.handleFetchProvince();
    }

    handleSetLoading = (loading: boolean) => {
        this.setState({ loading })
    }

    handleFetchProvince = async () => {
        this.setState({
            provinces: [{ id: '', name: '- Pilih Provinsi -' }]
        }, async () => {
            this.handleSetLoading(true);

            await apiServiceUtility.handleFetchProvince({ setState: this.setState });

            this.handleSetLoading(false);
        });
    }

    createContextValue = () => ({
        ...this.props,
        ...this.state,
        onFetchProvince: this.handleFetchProvince,
        onSetLoading: this.handleSetLoading,
    });

    render() {
        const { children } = this.props;
        const contextValue = this.createContextValue();

        return (
            <AppContext.Provider value={contextValue}>
                {children}
            </AppContext.Provider>
        );
    }
}

export default AppContextProvider;