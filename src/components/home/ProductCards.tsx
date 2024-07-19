import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

const ProductCards = ({ products }: { products: Product[] }) => {
  return (
    <div className="flex justify-center my-5">
      <div className="flex flex-wrap justify-center max-w-[1000px]">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
