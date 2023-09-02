import path from "path";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import { Post } from "@/types";

export async function GET(
  _request: Request,
  { params }: { params: { postId: string } }
) {
  const postId = params.postId;

  const postsDirectory = path.join(process.cwd(), "public/assets/posts");
  const data = await fs.readFile(postsDirectory + "/posts.json", "utf8");
  const posts: Post[] = JSON.parse(data).posts;
  const post: Post | undefined = posts.find((post: Post) => post.id === postId);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json<{ data: Post }>({
    data: post,
  });
}
