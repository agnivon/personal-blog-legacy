"use client";
import Image from "next/image";
import { Post } from "@/types";
import {
  Body1,
  Button,
  Caption1,
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
  Title1,
} from "@fluentui/react-components";
import { PreviewLinkRegular } from "@fluentui/react-icons";
import { useRouter } from "next/navigation";
import { Routes } from "@/constants/routes.constants";
import MountTransition from "@/components/global/transition/MountTransition";
import PostedTimeAgo from "./PostedTimeAgo";

type PostCardProps = {
  post: Post;
};

const PostCard = (props: PostCardProps) => {
  const { post } = props;

  const router = useRouter();

  return (
    <MountTransition>
      <Card className={"max-w-2xl h-full"} appearance="outline">
        <CardPreview>
          <Image
            src={post.previewImage}
            alt="Preview Image"
            width={1280}
            height={400}
          />
        </CardPreview>
        <CardHeader
          header={
            <Body1>
              <b className="line-clamp-2">{post.title}</b>
            </Body1>
          }
          description={
            <Caption1>
              <span>
                <PostedTimeAgo timestamp={post.publicationTimestamp} />
              </span>
              <span>&nbsp;&nbsp;{"•"}&nbsp;&nbsp;</span>
              <span>{post.description}</span>
            </Caption1>
          }
        />

        <CardFooter>
          <Button
            icon={<PreviewLinkRegular fontSize={16} />}
            onClick={() => {
              router.push(`${Routes["posts-with-params"]}${post.id}`);
            }}
          >
            View Article
          </Button>
        </CardFooter>
      </Card>
    </MountTransition>
  );
};

export default PostCard;
