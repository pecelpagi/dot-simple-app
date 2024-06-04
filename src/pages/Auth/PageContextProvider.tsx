import React, { Component, ReactNode, useContext } from 'react'
import PageContext from './PageContext';
import * as apiServiceUtility from './api-service.utils';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../App/AppContext';

interface IPageContextProviderProps {
    children: ReactNode;
    navigate?: any,
};

interface IClassComponentProps extends IPageContextProviderProps {
    onSetLoading: (loading: boolean) => void,
}

interface IPageContextProviderState {
    error: string;
};

class ClassComponent extends Component<IClassComponentProps, IPageContextProviderState> {
    state = {
        apiKey: "323fb606f44b43b4febb6470be051f2c",
        error: ""
    }
    
    setState: any = this.setState.bind(this);

    handleChangeApiKey = (val: string) => {
        this.setState({ apiKey: val, error: "" });
    }

    handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { navigate, onSetLoading } = this.props;
        const { apiKey } = this.state;

        onSetLoading(true);

        await apiServiceUtility.handleCheckApiKeyIsValid({ key: apiKey, navigate, setState: this.setState });

        onSetLoading(false);
    }

    createContextValue = () => ({
        ...this.props,
        ...this.state,
        onChangeApiKey: this.handleChangeApiKey,
        onSubmit: this.handleSubmit,
    });

    render() {
        const { children } = this.props;
        const contextValue = this.createContextValue();

        return (
            <PageContext.Provider value={contextValue}>
                {children}
            </PageContext.Provider>
        );
    }
}

const PageContextProvider = ({ children }: IPageContextProviderProps) => {
    const { onSetLoading } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <ClassComponent {...{ navigate, onSetLoading }}>
            {children}
        </ClassComponent>
    )
}

export default PageContextProvider;