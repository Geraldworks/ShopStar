/* eslint-disable @typescript-eslint/no-unused-vars */
/*
TODO

1. If the person is already logged in, going to /login will redirect to /home or stay at current page
*/

/*
DESIGN

The Design of the login page will be as follows
Half of the page will be the design
Half of the other page will be the content
*/

import useAuth from "@/components/hooks/useAuth";
import Signin from "@/components/auth/Signin";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SigninView = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <Navigate to="/listings" />
  ) : (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <div className="text-2xl font-bold">Sign In</div>
      <div>
        Don't have an account?{" "}
        <Link className="text-blue-600 underline" to="/signup">
          Sign up
        </Link>
      </div>
      <Signin />
    </div>
  );
};

export default SigninView;
