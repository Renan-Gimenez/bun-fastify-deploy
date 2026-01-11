import { z } from "zod";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";

export const healthRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    "/",
    {
      schema: {
        tags: ["Health"],
        response: {
          200: z.object({
            status: z.literal("ok"),
          }),
        },
      },
    },
    async (request, reply) => {
      reply.status(200).send({
        status: "ok",
      });
    }
  );
};
