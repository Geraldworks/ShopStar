import { useState, useEffect } from "react";

export const useCustomError = () => {
  const [error, setError] = useState("");

  useEffect(() => {
    if (error !== "") {
      const timer = setTimeout(() => {
        setError("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  return [error, setError] as const;
};
