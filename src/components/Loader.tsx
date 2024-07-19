import { Oval } from "react-loader-spinner";

const Loader = ({ loadingText }: { loadingText: string }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Oval />
      <div className="mt-5">{loadingText}</div>
    </div>
  );
};

export default Loader;
