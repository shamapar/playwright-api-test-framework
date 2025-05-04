import { expect, test } from '@playwright/test';
import { env } from '../config/env';
import { partialDataJobPayload, partialDataNamePayload } from '../testData/userData';

test('update job of user by Id', async ({ request }) => {
    const response = await request.patch(env.baseUrl.concat("/api/users/2"), {
        headers: env.headers,
        data: partialDataJobPayload
    })
    expect(response.status()).toEqual(200);
    const body = await response.json();
    expect(body).not.toHaveProperty("name");
    expect(body).toHaveProperty("job", partialDataJobPayload.job)
    expect(body).toHaveProperty("updatedAt")
})

test('update name of user by Id', async ({ request }) => {
    const response = await request.patch(env.baseUrl.concat("/api/users/2"), {
        headers: env.headers,
        data: partialDataNamePayload
    })
    expect(response.status()).toEqual(200);
    const body = await response.json();
    expect(body).toHaveProperty("name", partialDataNamePayload.name);
    expect(body).not.toHaveProperty("job")
    expect(body).toHaveProperty("updatedAt")
})
