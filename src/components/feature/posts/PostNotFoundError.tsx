import { Title2 } from "@fluentui/react-components";
import { ErrorCircle24Regular } from "@fluentui/react-icons";

const PostNotFoundError = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-y-4 w-full py-40">
        <div>
          <ErrorCircle24Regular className="h-32 w-32" />
        </div>
        <div>
          <Title2>Post not found</Title2>
        </div>
      </div>
    </>
  );
};

export default PostNotFoundError;
