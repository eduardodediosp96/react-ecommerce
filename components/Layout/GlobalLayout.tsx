import Layout, { Content } from 'antd/lib/layout/layout'
import GlobalFooter from './GlobalFooter'
import Navbar from './GlobalNavbar'

interface LayoutProps {
  children: React.ReactNode
}

const GlobalLayout = (props: LayoutProps) => {
  return (
    <Layout>
      <Navbar />
      <Content>{props.children}</Content>
      <GlobalFooter />
    </Layout>
  )
}

export default GlobalLayout
