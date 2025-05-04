import { IPage, IUser } from "../interface/page";
import { env } from '../config/env';
import { APIRequestContext } from "@playwright/test";

export function getUserById(idNumber: number, pageData: IUser[]) {
    const response = pageData.find((val) => {
        if (val.id === idNumber)
            return val;
    })
    return response;
}

export function getPageByNumber(pageNumber: number, pageData: IPage) {
    if (pageData.page === pageNumber)
        return pageData;
}

export async function getApiCall(request: APIRequestContext, endpoint: string) {
    const response = await request.get(env.baseUrl.concat(endpoint), {
        headers: env.headers
    });
    return response;
}

export const postApiCall = async (request: APIRequestContext, endpoint: string, payload: object) => {
    const response = await request.post(env.baseUrl.concat(endpoint), {
        headers: env.headers,
        data: payload,
    })
    return response;
}