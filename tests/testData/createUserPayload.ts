import { faker } from '@faker-js/faker'

export const createUserData = {
    "name": faker.person.fullName(),
    "job": faker.person.jobTitle()
}