"use client";

import PostCard from "@/components/feature/posts/PostCard";
import Loading from "@/components/global/Loading";
import RenderIf from "@/components/global/RenderIf";
import { Post } from "@/types";
import { fetcher } from "@/utils";
import useSWR from "swr";

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="grid grid-cols-1 gap-y-10 place-items-center">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};

const HomePage = () => {
  const { data, error, isLoading } = useSWR<{ data: Post[] }>(
    "/api/posts",
    fetcher
  );

  const posts = data?.data || [];

  return (
    <>
      <RenderIf isTrue={isLoading}>
        <Loading />
      </RenderIf>
      <RenderIf isTrue={!error && !isLoading}>
        <PostList posts={posts} />
      </RenderIf>
    </>
  );
};

export default HomePage;
