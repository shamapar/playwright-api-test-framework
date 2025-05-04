import { expect, test } from '@playwright/test';
import page1Data from '../pages/1.json';
import page2Data from '../pages/2.json';
import { getUserById, getPageByNumber, getApiCall } from '../helper/utility';
import { unknownUserExpectedData } from '../pages/unknowUser';
import { IUnknownPage } from '../interface/page';

test('get user by id', async ({ request }) => {
    const response = await getApiCall(request, "/api/users/4")

    expect(response.status()).toEqual(200);
    const body = await response.json();
    expect(body).toHaveProperty("data.id", 4);
    expect(body.data).toEqual(getUserById(4, page1Data.data))
})

test('get list of users by page', async ({ request }) => {
    const response = await getApiCall(request, "/api/users?page=2")

    expect(response.status()).toEqual(200);
    expect(await response.json()).toEqual(getPageByNumber(2, page2Data));
})

test('get response of unknown users', async ({ request }) => {
    const response = await getApiCall(request, "/api/unknown")

    expect(response.status()).toEqual(200);
    const body: IUnknownPage = await response.json();
    expect(body).toEqual(unknownUserExpectedData);
    body.data.forEach(user => expect(user).not.toHaveProperty('email'));
})