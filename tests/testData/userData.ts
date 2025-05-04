import { faker } from "@faker-js/faker";

export const createUserPayload = {
    "name": faker.person.fullName(),
    "job": faker.person.jobTitle()
}

export const loginDataPayload = {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}

export const updatedUserPayload = {
    "name": faker.person.fullName(),
    "job": faker.person.jobTitle()
}

export const partialDataJobPayload = {
    "job": faker.person.jobTitle()
}

export const partialDataNamePayload = {
    "name": faker.person.fullName()
}