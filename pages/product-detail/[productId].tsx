import { MongoClient, ObjectId } from 'mongodb'
import ProductDetails from '../../components/Products/ProductDetails'
import { ProductType } from '../../types/product'

interface ProductDetailProps {
  product: ProductType
}

function ProductDetail({ product }: ProductDetailProps) {
  // const router = useRouter()
  // const productId = router.query.productId as string
  return <ProductDetails product={product} />
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://DanielaArgumanis:daniela296@cluster0.hlpeo.mongodb.net/ecommerce_products?retryWrites=true&w=majority'
  )
  const db = client.db()
  const productsCollection = db.collection('products')
  const products = await productsCollection
    .find({}, { projection: { _id: 1 } })
    .toArray()
  const paramList = products.map((product) => ({
    params: {
      productId: product._id.toString(),
    },
  }))

  return {
    fallback: false,
    paths: paramList,
  }
}

export async function getStaticProps(context: {
  params: { productId: string }
}) {
  const id = context.params.productId
  const client = await MongoClient.connect(
    'mongodb+srv://DanielaArgumanis:daniela296@cluster0.hlpeo.mongodb.net/ecommerce_products?retryWrites=true&w=majority'
  )
  const db = client.db()
  const productsCollection = db.collection('products')
  const productDetails = await productsCollection.findOne({
    _id: new ObjectId(id),
  })

  return {
    props: {
      product: {
        id: productDetails?._id.toString(),
        name: productDetails?.name,
        description: productDetails?.description,
        features: productDetails?.features,
        price: productDetails?.price,
        currency: productDetails?.currency,
      },
    },
  }
}

export default ProductDetail
