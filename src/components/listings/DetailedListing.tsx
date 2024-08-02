import { ListingWithUsername } from "@/types/listing";

interface DetailedListingProps {
  listing: ListingWithUsername;
}

const DetailedListing = (props: DetailedListingProps) => {
  const { title, createdAt, listingImage, description, price, username } = props.listing;

  return (
    <div className="flex flex-col justify-center items-center mt-5 space-y-4">
      <p className="mx-10">
        <img src={listingImage} alt="random stock image" />
      </p>
      <p className="text-2xl">{title}</p>
      <p className="text-xl">{description}</p>
      <p className="text-xl">Price: ${price}</p>
      <p className="text-xl">Date Created: {new Date(createdAt).toDateString()}</p>
      <p className="text-xl pb-5">Created By: {username}</p>
    </div>
  );
};

export default DetailedListing;
