import { Spinner } from "@fluentui/react-components";

const Loading = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center">
      <Spinner />
    </div>
  );
};

export default Loading;
