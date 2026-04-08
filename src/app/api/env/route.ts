export async function GET() {
  console.log("SERVER SECRET:", process.env.SECRET_SOME_KEY);

  return Response.json({
    secretText: process.env.SECRET_SOME_KEY,
  });
}
