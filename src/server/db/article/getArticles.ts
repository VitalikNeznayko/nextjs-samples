import { drizzle } from "drizzle-orm/neon-http";
import { articlesTable } from "@/server/db/article/schema";

export const getArticles = async () => {
  if (!process.env.DB_DATABASE_URL) {
    throw new Error("DB_DATABASE_URL is undefined");
  }

  const db = drizzle(process.env.DB_DATABASE_URL);
  return await db.select().from(articlesTable);
};
