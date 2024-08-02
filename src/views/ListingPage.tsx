import DetailedListing from "../components/listings/DetailedListing";
import { useParams, useNavigate } from "react-router-dom";
import { ListingWithUsername } from "@/types/listing";
import listingService from "@/services/listings";
import { useState, useEffect } from "react";
import Theme from "../components/Theme";
import { isAxiosError } from "axios";

const ListingPage = () => {
  const [listing, setListing] = useState<ListingWithUsername>({} as ListingWithUsername);
  const listingId = Number(useParams().id);
  const navigate = useNavigate();

  useEffect(() => {
    void (async () => {
      try {
        const listing = await listingService.getOne(listingId);
        setListing(listing);
      } catch (err: unknown) {
        if (isAxiosError(err)) {
          navigate("/listings");
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listingId]);

  return (
    <Theme viewTitle="Detailed View">
      {isNaN(listingId) ? (
        <div className="text-center text-2xl">Invalid URL path</div>
      ) : (
        <div className="text-center">
          <DetailedListing listing={listing} />
        </div>
      )}
    </Theme>
  );
};

export default ListingPage;
