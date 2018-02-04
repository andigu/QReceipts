import { DrawerNavigator, StackNavigator } from 'react-navigation'
<<<<<<< HEAD
import { Home, Settings } from '../screens'
import QRCode from '../screens/QRCode'
import Auth from '../screens/Auth'
import Receipts from '../screens/Receipts'
const Main = StackNavigator({
  home: {
    screen: Receipts
=======
import { Analytics, Details, Login, QRCode, Receipts } from '../screens'

const Main = StackNavigator({
  Home: {
    screen: Receipts
  }, Add: {
    screen: QRCode
  }, Details: {
    screen: Details
>>>>>>> cd18da8f86e75fe89c705c6b40ca79792231ab06
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
