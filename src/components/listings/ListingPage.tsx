import { useParams } from "react-router-dom";

const ListingPage = () => {
  const listingId = useParams().id;
  return <div>this is product page of {listingId}</div>;
};

export default ListingPage;
