import React, { Component, ReactNode, useContext } from 'react'
import PageContext from './PageContext';
import * as apiServiceUtility from './api-service.utils';
import { Courier } from './enums';
import { IShippingCost } from './home.interface';
import { removeApiKey } from '../../utils';
import AppContext from '../../App/AppContext';

interface IPageContextProviderProps {
    children: ReactNode;
};

interface IClassComponentProps extends IPageContextProviderProps {
    onSetLoading: (loading: boolean) => void,
}

interface IPageContextProviderState {
    originProvinceId: string,
    destinationProvinceId: string,
    originCityId: string,
    destinationCityId: string,
    originCities: { id: number, name: string }[],
    destinationCities: { id: number, name: string }[],
    weight: number,
    courier: Courier,
    couriers: { id: number, name: string }[]
    shippingCost: IShippingCost | null,
};

class ClassComponent extends Component<IClassComponentProps, IPageContextProviderState> {
    state = {
        error: "",
        courier: Courier.EMPTY,
        couriers: [],
        originProvinceId: '',
        destinationProvinceId: '',
        originCityId: '',
        destinationCityId: '',
        originCities: [],
        destinationCities: [],
        weight: 0,
        shippingCost: null,
    }

    setState: any = this.setState.bind(this);

    componentDidMount(): void {
        this.handleSetCouriers();
    }

    handleLogout = () => {
        removeApiKey();
        window.location.href = '/';
    }

    handleSetCouriers = () => {
        const couriers = [
            {
                id: Courier.EMPTY,
                name: '- Pilih Kurir -',
            },
            {
                id: Courier.JNE,
                name: 'JNE',
            },
            {
                id: Courier.POS,
                name: 'POS',
            },
            {
                id: Courier.TIKI,
                name: 'TIKI',
            }
        ]

        this.setState({ couriers });
    }

    handleFetchCost = async (e: React.FormEvent) => {
        e.preventDefault();

        const { onSetLoading } = this.props;
        const { courier, originCityId, destinationCityId, weight } = this.state;

        onSetLoading(true);

        await apiServiceUtility.handleFetchCost({ setState: this.setState, courier, originCityId, destinationCityId, weight });

        onSetLoading(false);
    }

    handleFetchOriginCity = () => {
        const { onSetLoading } = this.props;
        const { originProvinceId } = this.state;

        this.setState({
            originCities: [{ id: '', name: '- Pilih Asal Kota -' }], originCityId: ''
        }, async () => {
            onSetLoading(true);

            await apiServiceUtility.handleFetchOriginCity({ setState: this.setState, selectedProvinceId: originProvinceId });
        
            onSetLoading(false);
        });
    }

    handleFetchDestinationCity = () => {
        const { onSetLoading } = this.props;
        const { destinationProvinceId } = this.state;

        this.setState({
            destinationCities: [{ id: '', name: '- Pilih Tujuan Kota -' }], destinationCityId: ''
        }, async () => {
            onSetLoading(true);

            await apiServiceUtility.handleFetchDestinationCity({ setState: this.setState, selectedProvinceId: destinationProvinceId });
                    
            onSetLoading(false);
        });
    }

    handleSetData = (key: string, val: string) => {
        this.setState({ [key]: val });
    }

    createContextValue = () => ({
        ...this.state,
        onSetData: this.handleSetData,
        onFetchDestinationCity: this.handleFetchDestinationCity,
        onFetchOriginCity: this.handleFetchOriginCity,
        onFetchCost: this.handleFetchCost,
        onLogout: this.handleLogout,
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

    return (
        <ClassComponent {...{ onSetLoading }}>
            {children}
        </ClassComponent>
    )
}

export default PageContextProvider;