import { fetchUsers } from "@/server/data/fetcher";
import {getArticles} from "@/server/db/article/getArticles";

export async function GET() {
  const users = await fetchUsers();

  return Response.json({
    users: users,
  });
}
