import { ListingWithUsername } from "@/types/listing";
import ListingCard from "./ListingCard";

interface ListingCardsProps {
  listings: ListingWithUsername[];
  route?: string;
}

const ListingCards = (props: ListingCardsProps) => {
  const { listings, route = "" } = props;
  return (
    <div className="flex justify-center my-5">
      <div className="flex flex-wrap justify-center max-w-[1000px]">
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing} route={route} />
        ))}
      </div>
    </div>
  );
};

export default ListingCards;
