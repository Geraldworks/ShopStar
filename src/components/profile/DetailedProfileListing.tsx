import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { ListingWithUsername } from "../../types/listing";
import listingService from "@/services/listings";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { isAxiosError } from "axios";
import Theme from "../Theme";

interface DeleteAlertProps {
  deleteListing: () => void;
}

const DeleteAlert = (props: DeleteAlertProps) => {
  const { deleteListing } = props;
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Listing</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete the current listing.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-500 hover:bg-red-400" onClick={deleteListing}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

interface DetailedProfileListingProps {
  listingId: number;
}

const DetailedProfileListing = (props: DetailedProfileListingProps) => {
  const { listingId } = props;
  const [listing, setListing] = useState<ListingWithUsername>({} as ListingWithUsername);

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await listingService.deleteOne(listingId);
      navigate("/profile");
    } catch (err: unknown) {
      if (isAxiosError(err)) {
        console.log(err.response?.status);
      }
    }
  };

  useEffect(() => {
    void (async () => {
      try {
        const listing = await listingService.getOne(listingId);
        setListing(listing);
      } catch (err: unknown) {
        if (isAxiosError(err)) {
          navigate("/profile/listings");
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listingId]);

  return (
    <Theme viewTitle="Detailed Profile Listing">
      {isNaN(listingId) ? (
        <div className="text-center text-2xl">Invalid URL path</div>
      ) : (
        <div className="text-center">
          {/* update logic here */}
          <DeleteAlert deleteListing={handleDelete} />
        </div>
      )}
    </Theme>
  );
};

export default DetailedProfileListing;
