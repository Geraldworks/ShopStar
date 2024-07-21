const ErrorDiv = ({ error }: { error: string }) => {
  return error === "" ? null : <p className="mt-4 text-sm font-medium text-red-500">{error}</p>;
};

export default ErrorDiv;
