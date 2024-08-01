import axios from "axios";
const baseUrl = import.meta.env.VITE_BACKEND_URL + "/listings";

import { Listing } from "@/types/listing";

interface listingFilters {
  title?: string;
  username?: string;
}

const getAll = async (filters: listingFilters) => {
  const { title = "", username = "" } = filters;
  const { data } = await axios.get<Listing[]>(
    baseUrl + `/search?title=${title}&username=${username}`
  );
  return data;
};

const createOne = async (listingPayload: Omit<Listing, "id">) => {
  const token = window.localStorage.getItem("shopstar-token");
  const { data } = await axios.post<Listing>(
    baseUrl,
    { data: listingPayload },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return data;
};

export default { getAll, createOne };
