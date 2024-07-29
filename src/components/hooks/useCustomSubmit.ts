// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useCustomError } from "./useCustomError";
// import { FieldValues } from "react-hook-form";
// import { useState } from "react";

// type SubmitFunction<T extends FieldValues> = (data: T) => Promise<any>;

// export function useCustomSubmit<T extends FieldValues>(submitFn: SubmitFunction<T>) {
//   const [submitted, setSubmitted] = useState(false);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useCustomError();

//   const submit = async (data: T) => {
//     setSubmitted(true);
//     try {
//       const response = await submitFn(data);
//       setResult(response);
//     } catch (err: unknown) {
//       if (err instanceof Error) {
//         setError(err.message);
//       }
//     } finally {
//       setSubmitted(false);
//     }
//   };

//   return {
//     submit,
//     submitted,
//     result,
//     error
//   };
// }
