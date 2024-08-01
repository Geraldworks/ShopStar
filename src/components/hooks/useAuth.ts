import loginService from "../../services/login";
import { useState, useEffect } from "react";

// a custom hook to check if a user is authenticated or not

const useAuth = () => {
  const token = window.localStorage.getItem("shopstar-token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authVerify = async () => {
    try {
      if (token) {
        await loginService.jwtAuth(token);
        setIsAuthenticated(true);
      } else {
        return;
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        localStorage.removeItem("shopstar-token");
      }
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    authVerify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isAuthenticated };
};

export default useAuth;
