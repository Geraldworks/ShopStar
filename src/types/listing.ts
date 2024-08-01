export type Listing = {
  id: number;
  createdAt: string;
  title: string;
  listingImage: string;
  description: string;
  price: number;
};

// TODO better naming
export type ListingNoId = Omit<Listing, "id">;
