import type { FastifyPluginAsync } from "fastify";

export const getUsersRoute: FastifyPluginAsync = async (app) => {
  app.get("/", (request, reply) => {
    const users = Array.from({ length: 10 }, () => ({
      name: "John Doe",
      email: "john.doe@example.com",
      avatar:
        "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/10.jpg",
    }));

    reply.send(users);
  });
};
