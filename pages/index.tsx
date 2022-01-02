import HomeHeader from '../components/Home/HomeHeader'
import ProductCategory from '../components/Products/ProductCategory'

const categories = ['Headset', 'Earphones', 'Audio']

const Home = () => {
  return (
    <>
      <HomeHeader></HomeHeader>
      {categories.map((category, index) => (
        <ProductCategory key={index} category={category} />
      ))}
    </>
  )
}

export default Home
