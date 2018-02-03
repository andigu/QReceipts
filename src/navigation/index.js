import { DrawerNavigator, StackNavigator } from 'react-navigation'
import { Home, Settings } from '../screens'
import Receipts from '../screens/Receipts'
import QRCode from '../screens/QRCode'

const Main = StackNavigator({
  home: {
    screen: Home
  }
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
    screen: QRCode
  }, app: {
    screen: Drawer
  }
}, {headerMode: 'none'})
