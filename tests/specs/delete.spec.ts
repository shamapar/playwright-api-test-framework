import { test, expect } from '@playwright/test'
import { env } from '../config/env'

test('delete user data by Id', async ({ request }) => {
    const response = await request.delete(env.baseUrl.concat("/api/users/2"), {
        headers: env.headers,
    })

    expect(response.status()).toEqual(204);
})
