import Profile from "@/components/profile/Profile";
import useAuth from "@/components/hooks/useAuth";
import { Link } from "react-router-dom";
import Theme from "@/components/Theme";

const ProfileView = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Theme viewTitle="Your Listings">
      <Profile />
    </Theme>
  ) : (
    <div>
      <div>
        You need to{" "}
        <Link className="text-blue-600 underline" to="/signin">
          sign in
        </Link>{" "}
        to view this page
      </div>
    </div>
  );
};

export default ProfileView;
