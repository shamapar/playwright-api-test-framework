import { expect, test } from '@playwright/test';
import { env } from '../config/env';
import { updatedUserPayload } from '../testData/userData';

test('update user details', async ({ request }) => {
    const response = await request.put(env.baseUrl.concat("/api/users/2"), {
        headers: env.headers,
        data: updatedUserPayload
    })

    expect(response.status()).toEqual(200);
    const body = await response.json()
    expect(body).toHaveProperty("name", updatedUserPayload.name)
    expect(body).toHaveProperty("job", updatedUserPayload.job)
    expect(body).toHaveProperty("updatedAt")
})