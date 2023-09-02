import PostViewPage from "@/pages/posts/PostViewPage";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { postId: string } }) {
  return <PostViewPage postId={params.postId} />;
}
