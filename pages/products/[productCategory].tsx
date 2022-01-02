import { useRouter } from "next/router";

function ProductsList() {
  const router = useRouter();
  const category = router.query.productCategory;
  return <p>{category}</p>;
}

export default ProductsList;
