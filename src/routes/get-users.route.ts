import { z } from "zod";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";

import { makeUsers } from "../mocks/user.factory";

export const getUsersRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    "/",
    {
      schema: {
        tags: ["Users"],
        response: {
          200: z
            .array(
              z.object({
                name: z.string(),
                email: z.email(),
                avatar: z.url(),
              })
            )
            .describe("Usuários"),
        },
      },
    },
    (request, reply) => {
      const users = makeUsers(10);
      reply.send(users);
    }
  );

  app.post(
    "/",
    {
      schema: {
        tags: ["Users"],
        body: z.object({
          name: z.string(),
          email: z.email(),
          avatar: z.url(),
        }),
      },
    },
    async (request, reply) => {
      const { name, email, avatar } = request.body;

      const newUser = {
        name,
        email,
        avatar,
      };

      reply.send(newUser);
    }
  );
};
