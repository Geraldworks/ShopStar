import ListingCards from "@/components/listings/ListingCards";
import ProfileDropdown from "@/components/ProfileDropdown";
import { ListingWithUsername } from "@/types/listing";
import BrandLabel from "@/components/BrandLabel";
import listingService from "@/services/listings";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
/*
TODO 

1. Change state management to react query
2. Create components for cards
3. Add Navbar to be appended to left side of screen
*/
// change state management to react query

const Listings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [listings, setListings] = useState<ListingWithUsername[]>([]);
  const [titleSearch, setTitleSearch] = useState(
    new URLSearchParams(location.search).get("title") || ""
  );

  const navigate = useNavigate();

  const handleSearch = (event: React.SyntheticEvent) => {
    event.preventDefault();
    navigate(`/listings?title=${titleSearch}`);
  };

  useEffect(() => {
    const getListings = async () => {
      setIsLoading(true);
      try {
        const data = await listingService.getAll({ title: titleSearch });
        setListings(data);
      } finally {
        setIsLoading(false);
      }
    };
    getListings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <div className="flex flex-col h-screen">
      <BrandLabel />
      <div className="m-3 flex justify-around align-middle items-center">
        <div className="text-xl">Product Listings</div>
        <div className="flex items-center justify-around align-middle">
          <div className="mr-2">
            <form onSubmit={handleSearch}>
              <Input
                placeholder="Search..."
                onChange={(event) => setTitleSearch(event.target.value)}
              />
            </form>
          </div>
          <ProfileDropdown />
        </div>
      </div>
      <hr />
      {isLoading ? (
        <Loader loadingText="Loading Products..." />
      ) : (
        <ListingCards listings={listings} route="/listings" />
      )}
    </div>
  );
};

export default Listings;
