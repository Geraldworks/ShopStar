import { useParams } from "react-router-dom";

const ProductPage = () => {
  const productId = useParams().id;
  console.log(productId);
  return <div>this is product page of {productId}</div>;
};

export default ProductPage;
