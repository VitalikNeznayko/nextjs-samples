import { Post } from "@/types/posts";
import { sql } from "@vercel/postgres";

export const sleep = async (timeout: number) => {
  return new Promise((res) => setTimeout(res, timeout));
};

export const fetchAllPosts = async (): Promise<Post[]> => {
  console.log("START: fetching all posts");
  // await sleep(2000);
  return fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => {
      console.log("FINISH: fetching all posts");
      return response.json();
    },
  );
};

export const fetchPost = async (id: number): Promise<Post> => {
  console.log(`START: fetching post ${id}`);
  // await sleep(4000 * id);
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
    (response) => {
      console.log(`FINISH: fetching post ${id}`);
      return response.json();
    },
  );
};

export async function fetchUsers() {
  const data = await sql`SELECT * FROM users`;
  return data.rows;
}

export async function fetchInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name, invoices.status
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    ORDER BY invoices.date DESC
    LIMIT 5`;
  return data.rows;
}