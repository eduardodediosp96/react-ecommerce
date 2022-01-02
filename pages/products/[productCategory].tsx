import { useRouter } from 'next/router'
import ProductsHeader from '../../components/Products/ProductsHeader'

function ProductsList() {
  const router = useRouter()
  const category = router.query.productCategory as string
  return (
    <>
      <ProductsHeader title={category} />
    </>
  )
}

export default ProductsList
