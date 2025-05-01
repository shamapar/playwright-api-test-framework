import { expect, test } from '@playwright/test';
import { json } from 'stream/consumers';

test('get user by id', async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users/4", {
        headers: { "x-api-key": "reqres-free-v1" }
    });

    expect(response.status()).toEqual(200);

    const expectedResponse = {
        "data": {
            "id": 4,
            "email": "eve.holt@reqres.in",
            "first_name": "Eve",
            "last_name": "Holt",
            "avatar": "https://reqres.in/img/faces/4-image.jpg"
        },
        "support": {
            "url": "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
            "text": "Tired of writing endless social media content? Let Content Caddy generate it for you."
        }
    }

    expect(await response.json()).toHaveProperty('data.id', 4);
    expect(await response.json()).toEqual(expectedResponse);
})

test('get users response by page', async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users?page=2", {
        headers: { "x-api-key": "reqres-free-v1" }
    });
    const body = {
        "page": 2,
        "per_page": 6,
        "total": 12,
        "total_pages": 2,
        "data": [
            {
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 8,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 9,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            },
            {
                "id": 10,
                "email": "byron.fields@reqres.in",
                "first_name": "Byron",
                "last_name": "Fields",
                "avatar": "https://reqres.in/img/faces/10-image.jpg"
            },
            {
                "id": 11,
                "email": "george.edwards@reqres.in",
                "first_name": "George",
                "last_name": "Edwards",
                "avatar": "https://reqres.in/img/faces/11-image.jpg"
            },
            {
                "id": 12,
                "email": "rachel.howell@reqres.in",
                "first_name": "Rachel",
                "last_name": "Howell",
                "avatar": "https://reqres.in/img/faces/12-image.jpg"
            }
        ],
        "support": {
            "url": "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
            "text": "Tired of writing endless social media content? Let Content Caddy generate it for you."
        }
    }
    expect(response.status()).toEqual(200);
    expect(await response.json()).toEqual(body);
})

test('get response of unknown users', async ({ request }) => {
    const response = await request.get("https://reqres.in/api/unknown", {
        headers: { "x-api-key": "reqres-free-v1" }
    });
    const body = {
        "page": 1,
        "per_page": 6,
        "total": 12,
        "total_pages": 2,
        "data": [
            {
                "id": 1,
                "name": "cerulean",
                "year": 2000,
                "color": "#98B2D1",
                "pantone_value": "15-4020"
            },
            {
                "id": 2,
                "name": "fuchsia rose",
                "year": 2001,
                "color": "#C74375",
                "pantone_value": "17-2031"
            },
            {
                "id": 3,
                "name": "true red",
                "year": 2002,
                "color": "#BF1932",
                "pantone_value": "19-1664"
            },
            {
                "id": 4,
                "name": "aqua sky",
                "year": 2003,
                "color": "#7BC4C4",
                "pantone_value": "14-4811"
            },
            {
                "id": 5,
                "name": "tigerlily",
                "year": 2004,
                "color": "#E2583E",
                "pantone_value": "17-1456"
            },
            {
                "id": 6,
                "name": "blue turquoise",
                "year": 2005,
                "color": "#53B0AE",
                "pantone_value": "15-5217"
            }
        ],
        "support": {
            "url": "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
            "text": "Tired of writing endless social media content? Let Content Caddy generate it for you."
        }
    }
    expect(response.status()).toEqual(200);
    expect(await response.json()).toEqual(body);
})

test('get one user by ID', async ({ request }) => {
    const body = {
        "data": {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        "support": {
            "url": "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
            "text": "Tired of writing endless social media content? Let Content Caddy generate it for you."
        }
    }
    const response = await request.get("https://reqres.in/api/users/2", {
        headers: { "x-api-key": "reqres-free-v1" }
    });
    expect(await response.json()).toEqual(body);
})