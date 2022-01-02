import Button from 'antd/lib/button'
import type { NextPage } from 'next'
import styled from 'styled-components'

const Heading = styled(Button)`
  font-size: 22px;
  color: green;
`

const Home: NextPage = () => {
  return <Heading type="primary">HOME</Heading>
}

export default Home
