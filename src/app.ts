import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";

import fastifySwagger from "@fastify/swagger";
import fastifyApiReference from "@scalar/fastify-api-reference";

import { getUsersRoute } from "./routes/get-users.route";

export const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "*",
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Bun Fastify Deploy",
      description: "Bun Fastify Deploy",
      version: "1.0.0",
    },
  },
  transform: jsonSchemaTransform,
});
app.register(fastifyApiReference, {
  routePrefix: "/docs",
});

app.register(getUsersRoute, { prefix: "/users" });
