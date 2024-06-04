import * as api from '../../data';
import { IParams, ResponseError } from '../../data/data.interface';
import { setApiKey } from '../../utils';

interface ICheckApiKeyIsValidParams extends IParams {
    setState: any,
    navigate: any
}

export const handleCheckApiKeyIsValid = async (params: ICheckApiKeyIsValidParams) => {
    const { key, setState, navigate } = params;

    try {
        await api.getProvince({ key });

        setApiKey(String(key));

        navigate('/');
    } catch (e: unknown) {
        if (e instanceof ResponseError) {
            setState({ error: e.message });
        }
    }
}