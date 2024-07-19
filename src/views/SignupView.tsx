import Signup from "@/components/login/Signup";
import { Link } from "react-router-dom";

const SignupView = () => {
  return (
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
