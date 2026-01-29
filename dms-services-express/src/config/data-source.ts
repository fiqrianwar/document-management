import "reflect-metadata";
import { DataSource } from "typeorm";
import { env } from "./env";
import { Documents } from "../modules/documents/documents.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,

  entities: [Documents],
  migrations: ["src/database/migrations/*.ts"],
  synchronize: false,
  logging: env.NODE_ENV === "development",
});
