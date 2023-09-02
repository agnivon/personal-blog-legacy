import { getTimeAgoString } from "@/utils";

const PostedTimeAgo = ({ timestamp }: { timestamp: number }) => {
  const timeAgoString = getTimeAgoString(timestamp);

  return <>{timeAgoString} ago</>;
};

export default PostedTimeAgo;
