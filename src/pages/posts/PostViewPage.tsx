"use client";

import PostNotFoundError from "@/components/feature/posts/PostNotFoundError";
import Loading from "@/components/global/Loading";
import MountTransition from "@/components/global/transition/MountTransition";
import { Post } from "@/types";
import { fetcher } from "@/utils";
import { Divider, Title2 } from "@fluentui/react-components";
import React from "react";
import ReactMarkdown from "react-markdown";
import useSWR from "swr";

type PostViewPageProps = {
  postId: string;
};

const PostViewPage = (props: PostViewPageProps) => {
  const { data, error, isLoading } = useSWR<{ data: Post }>(
    `/api/posts/${props.postId}`,
    fetcher
  );

  const post = data?.data;

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <PostNotFoundError />;
  }

  const postContent = post?.content || "";

  return (
    <MountTransition>
      <div>
        <Title2>{post?.title}</Title2>
      </div>
      <div className="mt-2 mb-3">
        <Divider />
      </div>
      <div className="whitespace-pre-line">
        <ReactMarkdown>{postContent}</ReactMarkdown>
      </div>
    </MountTransition>
  );
};

export default React.memo(PostViewPage);
