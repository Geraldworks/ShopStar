import { Card, CardContent } from "@/components/ui/card";
import { Listing } from "@/types/listing";
import { Link } from "react-router-dom";

type ListingCardProps = Listing & { route?: string };

const ListingCard = (props: ListingCardProps) => {
  const { id, title, listingImage, price, createdAt, route = "" } = props;

  return (
    <Link to={`${route}/${id}`}>
      <Card className="m-1 max-w-56 max-h-80 hover:shadow-md cursor-pointer">
        <img className="w-full h-auto" src={listingImage} alt="some image" />
        <CardContent>
          <p className="text-sm mt-3 mb-1">{title}</p>
          <p className="text-sm">${price}</p>
          <p className="text-sm mt-1">{new Date(createdAt).toDateString()}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ListingCard;