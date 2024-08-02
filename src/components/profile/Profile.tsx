import CreateListing from "../listings/CreateListing";
import { ListingWithUsername } from "@/types/listing";
import ListingCards from "../listings/ListingCards";
import { NonSensitiveUser } from "../../types/auth";
import listingService from "@/services/listings";
import authService from "../../services/user";
import { useEffect, useState } from "react";

const Profile = () => {
  const [userInfo, setUserInfo] = useState<NonSensitiveUser>();
  const [userListings, setUserListings] = useState<ListingWithUsername[]>([]);

  useEffect(() => {
    void (async () => {
      const user = await authService.getUser();
      setUserInfo(user);
      const userListings = await listingService.getAll({ username: user?.username });
      setUserListings(userListings);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="text-xl">
        <div className="flex justify-around items-center mt-4">
          Welcome, {userInfo?.firstName}!
          <CreateListing addListing={(listing) => setUserListings([...userListings, listing])} />
        </div>
        <ListingCards listings={userListings} route="/profile/listings" />
      </div>
    </div>
  );
};

export default Profile;
