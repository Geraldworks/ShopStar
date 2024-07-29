import { LoadingSpinner } from "./ui/loader";

interface MiniLoaderProps {
  displayText: string;
  isLoading: boolean;
}

const MiniLoader = (props: MiniLoaderProps) => {
  const { displayText, isLoading } = props;

  return !isLoading ? <div>{displayText}</div> : <LoadingSpinner />;
};

export default MiniLoader;
