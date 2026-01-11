import { app } from "./app";
import { env } from "./env";
import { faker } from "@faker-js/faker";

const bootstrap = async () => {
  if (env.NODE_ENV !== "production") {
    faker.seed(123);
  }

  await app.listen({
    port: env.PORT,
    host: env.HOST,
  });

  console.log(`Server running on port ${env.PORT}`);
};

bootstrap().catch((error) => {
  console.error(error);
  process.exit(1);
});
