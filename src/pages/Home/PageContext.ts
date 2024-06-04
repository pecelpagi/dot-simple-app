import React from 'react';
import { Courier } from './enums';
import { IShippingCost } from './home.interface';

interface IDefaultValue {
    error: string;
    originProvinceId: string;
    destinationProvinceId: string;
    originCityId: string;
    destinationCityId: string;
    originCities: { id: number, name: string }[];
    destinationCities: { id: number, name: string }[];
    weight: number;
    courier: Courier,
    couriers: { id: number, name: string }[];
    shippingCost: IShippingCost | null,
    onSetData: (key: string, val: string) => void,
    onFetchOriginCity: () => void;
    onFetchDestinationCity: () => void;
    onFetchCost: (e: React.FormEvent) => void;
    onLogout: () => void,
}

const defaultValue: IDefaultValue = {
    error: "",
    originProvinceId: '',
    destinationProvinceId: '',
    originCityId: '',
    destinationCityId: '',
    originCities: [],
    destinationCities: [],
    weight: 0,
    courier: Courier.EMPTY,
    couriers: [],
    shippingCost: null,
    onSetData: () => { },
    onFetchOriginCity: () => {},
    onFetchDestinationCity: () => {},
    onFetchCost: () => {},
    onLogout: () => {},
}

const PageContext = React.createContext(defaultValue);

export default PageContext;