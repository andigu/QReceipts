import { DrawerNavigator, StackNavigator } from 'react-navigation'
import { Home, Settings } from '../screens'
import QRCode from '../screens/QRCode'
import Auth from '../screens/Auth'
import Receipts from '../screens/Receipts'
const Main = StackNavigator({
  home: {
    screen: Receipts
  }
}, {
  headerMode: 'none'
})

const Drawer = DrawerNavigator({
  main: {
    screen: Main
  }, settings: {
    screen: Settings
  }
})

export default StackNavigator({
  auth: {
    screen: Auth
  }, app: {
    screen: Drawer
  }
}, {headerMode: 'none', initialRouteName: 'app'})
