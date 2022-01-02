import { useRouter } from "next/router";

function ProductDetail() {
  const router = useRouter();
  const productId = router.query.productId;
  return <p>{productId}</p>;
}

export default ProductDetail;
