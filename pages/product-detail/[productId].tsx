import { useRouter } from 'next/router'
import ProductDetails from '../../components/Products/ProductDetails'

const DUMMY_PRODUCT = {
  name: 'Headphones',
  price: 100,
  currency: '$',
  description:
    'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
  features:
    'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
  items: [
    { quantity: 1, name: 'Headphone unit' },
    { quantity: 2, name: 'Replacement earcups' },
  ],
}

function ProductDetail() {
  const router = useRouter()
  const productId = router.query.productId as string
  const product = { ...DUMMY_PRODUCT, id: productId }
  return <ProductDetails product={product} />
}

export default ProductDetail
