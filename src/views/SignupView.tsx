import useAuth from "@/components/hooks/useAuth";
import Signup from "@/components/auth/Signup";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignupView = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Navigate to="/listings" />
  ) : (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <div className="text-2xl font-bold">Sign Up</div>
      <div>
        Already have an account?{" "}
        <Link className="text-blue-600 underline" to="/signin">
          Sign in
        </Link>
      </div>
      <Signup />
    </div>
  );
};

export default SignupView;
