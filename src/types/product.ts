export type Product = {
  id: number;
  createdAt: string;
  title: string;
  productImage: string;
  description: string;
};

// TODO better naming
export type ProductNoId = Omit<Product, "id">;
