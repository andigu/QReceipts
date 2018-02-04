import { DrawerNavigator, StackNavigator } from 'react-navigation'
import { Analytics, Details, Login, QRCode, Receipts } from '../screens'

const Main = StackNavigator({
  Home: {
    screen: Receipts
  }, Add: {
    screen: QRCode
  }, Details: {
    screen: Details
  }
}, {
  headerMode: 'none'
})

const Drawer = DrawerNavigator({
  Home: {
    screen: Main
  }, Analytics: {
    screen: Analytics
  }
})

export default StackNavigator({
  Auth: {
    screen: Login
  }, App: {
    screen: Drawer
  }
}, {headerMode: 'none'})
