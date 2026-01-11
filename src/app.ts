import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";

import { getUsersRoute } from "./routes/get-users.route";

export const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(getUsersRoute, { prefix: "/users" });
