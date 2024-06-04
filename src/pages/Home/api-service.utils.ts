import * as api from '../../data';
import { ICostParams, IParams, ResponseError } from '../../data/data.interface';
import { getApiKey } from '../../utils';
import { Courier } from './enums';

interface IFetchCityParams {
    setState: any,
    selectedProvinceId: string,
}

interface IFetchCostParams {
    setState: any,
    courier: Courier,
    originCityId: string,
    destinationCityId: string,
    weight: number,
}

export const handleFetchOriginCity = async (params: IFetchCityParams) => {
    const apiKey = getApiKey();

    if (!apiKey) return;

    const { setState, selectedProvinceId } = params;

    try {
        const res = await api.getCity({ key: apiKey, province: selectedProvinceId });

        let cities = [{ id: '', name: '- Pilih Asal Kota -' }]

        cities = [...cities, ...res.rajaongkir.results.map((x: any) => ({ ...x, id: x.city_id, name: `${x.type} ${x.city_name}` }))];

        setState({ originCities: cities });
    } catch (e: unknown) {
        if (e instanceof ResponseError) {
            setState({ error: e.message });
        }
    }
}

export const handleFetchDestinationCity = async (params: IFetchCityParams) => {
    const apiKey = getApiKey();

    if (!apiKey) return;

    const { setState, selectedProvinceId } = params;

    try {
        const res = await api.getCity({ key: apiKey, province: selectedProvinceId });

        let cities = [{ id: '', name: '- Pilih Tujuan Kota -' }]

        cities = [...cities, ...res.rajaongkir.results.map((x: any) => ({ ...x, id: x.city_id, name: `${x.type} ${x.city_name}` }))];

        setState({ destinationCities: cities });
    } catch (e: unknown) {
        if (e instanceof ResponseError) {
            setState({ error: e.message });
        }
    }
}

export const handleFetchCost = async (params: IFetchCostParams) => {
    const apiKey = getApiKey();

    if (!apiKey) return;

    const { setState, courier, originCityId, destinationCityId, weight } = params;

    try {
        const payload: ICostParams = {
            key: apiKey,
            origin: originCityId,
            destination: destinationCityId,
            weight: +weight,
            courier,
        };
        const res = await api.postCost(payload);
        const results = res.rajaongkir.results;

        if (results.length === 0) throw new Error('empty');
        
        setState({
            shippingCost: results[0],
            error: '',
        });
    } catch (e: unknown) {
        if (e instanceof ResponseError) {
            setState({ error: e.message });
        }
    }
}