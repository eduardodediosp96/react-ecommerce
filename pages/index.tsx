import Head from 'next/head'
import HomeHeader from '../components/Home/HomeHeader'
import ProductCategory from '../components/Products/ProductCategory'

const categories = ['Headset', 'Earphones', 'Audio']

const Home = () => {
  return (
    <>
      <Head>
        <title>Ecommerce</title>
        <meta name='description' content='Boilerplate for an ecommerce website'></meta>
      </Head>
        <HomeHeader></HomeHeader>
        {categories.map((category, index) => (
          <ProductCategory key={index} category={category} />
        ))}
    </>
  )
}

export default Home
