import { Header } from 'antd/lib/layout/layout'
import Menu from 'antd/lib/menu'
import Link from 'next/link'

const HomeHeader = () => {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">
          <Link href="/products/headsets">Headsets</Link>
        </Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  )
}

export default HomeHeader
