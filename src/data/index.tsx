import fetchApi from "./ApiService";
import { ICityParams, ICostParams, IParams } from "./data.interface";
import { METHOD_TYPE } from "./enums";

export const getProvince = async (params: IParams) => {
  const response = await fetchApi("/api/starter/province", params);

  return response;
};

export const getCity = async (params: ICityParams) => {
  const response = await fetchApi("/api/starter/city", params);

  return response;
};

export const postCost = async (params: ICostParams) => {
  const response = await fetchApi("/api/starter/cost", params, METHOD_TYPE.POST);

  return response;
};