import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/types/product";
import { Link } from "react-router-dom";

const ProductCard = (props: Product) => {
  const { id, createdAt, productImage } = props;

  return (
    <Link to={`${id}`}>
      <Card className="m-1 max-w-56 max-h-80 hover:shadow-md cursor-pointer">
        <img className="w-full h-auto" src={productImage} alt="some image" />
        <CardContent>Product Information</CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
