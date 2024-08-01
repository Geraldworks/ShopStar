import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProfileListingPage = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <div>This is a profile listing page</div>
  ) : (
    <div>
      You need to{" "}
      <Link className="text-blue-600 underline" to="/signin">
        sign in
      </Link>{" "}
      to view this page
    </div>
  );
};

export default ProfileListingPage;
