export interface IParams {
    [key: string]: string | number
}

export interface ICityParams extends IParams {
    province: string
}

export interface ICostParams extends IParams {
    origin: string;
    destination: string;
    weight: number;
    courier: string;
}

export class ResponseError extends Error {
    constructor(public status: number, public message: string) {
        super(message);
    }
}