import { DrawerNavigator, StackNavigator } from 'react-navigation'
import { Home, Settings } from '../screens'
import Receipts from '../screens/Receipts'

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
    screen: Receipts
  }, app: {
    screen: Drawer
  }
}, {headerMode: 'none'})
