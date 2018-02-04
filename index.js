import React from 'react'

import { AppRegistry } from 'react-native'
import App from './App'
import HomeScreen from "./login"
console.disableYellowBox = true;

AppRegistry.registerComponent('QReceipts', () => HomeScreen)
