import axios from "axios";
const baseUrl = import.meta.env.VITE_BACKEND_URL + "/products";

import { Product } from "@/types/product";

const getAll = async () => {
  const { data } = await axios.get<Product[]>(baseUrl);

  return data;
};

export default { getAll };
