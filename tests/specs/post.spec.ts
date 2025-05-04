import { expect, test } from '@playwright/test';
import { createUserPayload, loginDataPayload } from '../testData/userData';
import { postApiCall } from '../helper/utility';

test('create user', async ({ request }) => {
    const response = await postApiCall(request, "/api/users", createUserPayload)

    expect(response.status()).toEqual(201);
    const body = await response.json();
    expect(body).toHaveProperty("name", createUserPayload.name)
    expect(body).toHaveProperty("job", createUserPayload.job)
    expect(body).toHaveProperty("id");
    expect(body).toHaveProperty("createdAt");
})

test('loging to application', async ({ request }) => {
    const response = await postApiCall(request, "/api/login", loginDataPayload)

    expect(response.status()).toEqual(200);
    const body = await response.json()
    expect(body).toHaveProperty("token");
})