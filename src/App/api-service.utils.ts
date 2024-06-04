import * as api from '../data';
import { ResponseError } from '../data/data.interface';
import { getApiKey } from '../utils';

interface IFetchProvinceParams {
    setState: any,
}

export const handleFetchProvince = async (params: IFetchProvinceParams) => {
    const apiKey = getApiKey();

    if (!apiKey) return;
    
    try {
        const { setState } = params;
        const res = await api.getProvince({ key: apiKey });

        let provinces = [{ id: '', name: '- Pilih Provinsi -' }]

        provinces = [...provinces, ...res.rajaongkir.results.map((x: any) => ({ ...x, id: x.province_id, name: x.province }))];

        setState({
            provinces
        });
    } catch (e: unknown) {
        if (e instanceof ResponseError) {
            console.log('DEBUG-ERR: ', e.message);
        }
    }
}