import { useRouter } from 'next/router'
import ProductsHeader from '../../components/Products/ProductsHeader'
import { MongoClient } from 'mongodb'
import { ProductType } from '../../types/product'
import ProductDetails from '../../components/Products/ProductDetails'

interface ProductsListProps {
  products: Array<ProductType>
}

function ProductsList({ products }: ProductsListProps) {
  const router = useRouter()
  const category = router.query.productCategory as string
  return (
    <>
      <ProductsHeader title={category} />
      {products.map((product, index) => (
        <ProductDetails key={index} product={product} />
      ))}
    </>
  )
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          productCategory: 'headsets',
        },
      },
    ],
  }
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://DanielaArgumanis:daniela296@cluster0.hlpeo.mongodb.net/ecommerce_products?retryWrites=true&w=majority'
  )
  const db = client.db()
  const productsCollection = db.collection('products')
  const productsList = await productsCollection.find().toArray()
  client.close()

  return {
    props: {
      products: productsList.map((product) => ({
        name: product.name,
        price: product.price,
        currency: product.currency,
        description: product.description,
        features: product.features,
        id: product._id.toString(),
      })),
    },
  }
}

export default ProductsList
