import { faker } from "@faker-js/faker";

export type UserMock = {
  name: string;
  email: string;
  avatar: string;
};

export const makeUser = (): UserMock => {
  return {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  };
};

export const makeUsers = (amount: number): UserMock[] => {
  return Array.from({ length: amount }, () => makeUser());
};
