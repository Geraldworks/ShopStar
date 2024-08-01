import { z } from "zod";

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

export const ListingSchema = z.object({
  title: z.string().min(10).max(40).trim(),
  listingImage: z.string(),
  description: z.string().min(1, "Please include a description for this listing").trim(),
  price: z.number().min(0.01, "Please include a price for this listing")
});

export type TListingSchema = z.infer<typeof ListingSchema>;
