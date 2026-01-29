import app from "./app";
import { env } from "./config/env";
import { AppDataSource } from "./config/data-source";

async function bootstrap() {
  await AppDataSource.initialize();
  console.log("✅ Database connected");

  app.listen(env.PORT, () => {
    console.log(`🚀 Server running on port ${env.PORT}`);
  });
}

bootstrap().catch((err) => {
  console.error("❌ Failed to start server", err);
  process.exit(1);
});
