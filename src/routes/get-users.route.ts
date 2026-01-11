import type { FastifyPluginAsync } from "fastify";
import { makeUser, makeUsers } from "../mocks/user.factory";

export const getUsersRoute: FastifyPluginAsync = async (app) => {
  app.get("/", (request, reply) => {
    const users = makeUsers(10);
    reply.send(users);
  });
};
