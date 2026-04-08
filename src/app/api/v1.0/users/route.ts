import { fetchUsers } from "@/server/data/fetcher";

export async function GET() {
  const users = await fetchUsers();

  return Response.json({
    users: users,
  });
}
