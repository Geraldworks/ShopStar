import DetailedProfileListing from "@/components/profile/DetailedProfileListing";
import useAuth from "../components/hooks/useAuth";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProfileListingView = () => {
  const { isAuthenticated } = useAuth();
  const listingId = Number(useParams().id);

  return isAuthenticated ? (
    <DetailedProfileListing listingId={listingId} />
  ) : (
    <div>
      You need to{" "}
      <Link className="text-blue-600 underline" to="/signin">
        sign in
      </Link>{" "}
      to access this page
    </div>
  );
};

export default ProfileListingView;
