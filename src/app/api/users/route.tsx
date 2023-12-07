import { NextResponse } from "next/server";

export async function GET() {
  console.log("API NEXT GET");

  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: {
      revalidate: 10,
    },
  });

  return NextResponse.json(await response.json());
}
