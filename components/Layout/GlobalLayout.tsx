import { Paper } from '@material-ui/core'
import GlobalFooter from './GlobalFooter'
import Navbar from './GlobalNavbar'

interface LayoutProps {
  children: React.ReactNode
}

const GlobalLayout = (props: LayoutProps) => {
  return (
    <Paper>
      <Navbar />
      {props.children}
      <GlobalFooter />
    </Paper>
  )
}

export default GlobalLayout
