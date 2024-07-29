import ProductCards from "@/components/home/ProductCards";
import productService from "@/services/products";
import { useState, useEffect } from "react";
import { Product } from "@/types/product";
import Loader from "@/components/Loader";

/*
TODO 

1. Change state management to react query
2. Create components for cards
3. Add Navbar to be appended to left side of screen
*/
// change state management to react query

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const data = await productService.getAll();
      setProducts(data);
      setIsLoading(false);
    };
    getProducts();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <p className="text-2xl">Product Listings</p>
      {isLoading ? (
        <Loader loadingText="Loading Products..." />
      ) : (
        <ProductCards products={products} />
      )}
    </div>
  );
};

export default Products;
