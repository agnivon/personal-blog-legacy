import path from "path";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import { Post } from "@/types";

export async function GET() {
  const postsDirectory = path.join(process.cwd(), "public/assets/posts");
  const data = await fs.readFile(postsDirectory + "/posts.json", "utf8");

  return NextResponse.json<{ data: Post[] }>({
    data: (JSON.parse(data).posts as Post[]).sort(
      (a, b) => b.publicationTimestamp - a.publicationTimestamp
    ),
  });
}
