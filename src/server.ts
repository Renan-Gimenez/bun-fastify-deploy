import { app } from "./app";
import { env } from "./env";

const bootstrap = async () => {
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
