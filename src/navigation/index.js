import { DrawerNavigator, StackNavigator } from 'react-navigation'
import {Settings, Home, Auth} from '../screens'

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
    screen: Auth
  }, app: {
    screen: Drawer
  }
}, {headerMode: 'none'})
