interface ErrorDivProps {
  error: string;
}

const ErrorDiv = (props: ErrorDivProps) => {
  const { error } = props;

  return error === "" ? null : <p className="mt-4 text-sm font-medium text-red-500">{error}</p>;
};

export default ErrorDiv;
