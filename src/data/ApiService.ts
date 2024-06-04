import { IParams, ResponseError } from "./data.interface";
import { METHOD_TYPE } from "./enums";

const getQueryParams = (params: IParams) => {
    const esc = encodeURIComponent;
    return Object.keys(params)
        .map((k: string) => `${esc(k)}=${esc(params[String(k)])}`)
        .join("&");
};

const fetchApi = async (endPoint: string, params: IParams, method = METHOD_TYPE.GET) => {
    let options: any = { method };
    let url = `${endPoint}?${getQueryParams(params)}`;

    if (method !== METHOD_TYPE.GET) {
        url = endPoint;
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        }
    };

    const response = await fetch(url, options);

    const retval = await response.json();

    if (response.ok) return retval;

    const errorData = retval.rajaongkir.status;

    throw new ResponseError(errorData.code, errorData.description);
}

export default fetchApi;