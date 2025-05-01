import { expect, test } from '@playwright/test';
import { createUserData } from '../testData/createUserPayload';

test('create user', async ({ request }) => {

    const response = await request.post("https://reqres.in/api/users", {
        data: createUserData,
        headers: { "x-api-key": "reqres-free-v1" }
    })

    expect(response.status()).toEqual(201);
    const body = await response.json();
    expect(body).toHaveProperty("name", createUserData.name);
    expect(body).toHaveProperty("job", createUserData.job)
    expect(body).toHaveProperty("id");
    expect(body).toHaveProperty("createdAt");
})