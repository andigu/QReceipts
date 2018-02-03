import React from 'react';
import getTheme from './src/theme/components'
import material from './src/theme/variables/material';
import AppNavigator from './src/navigation'
import { StyleProvider } from 'native-base'

export default class App extends React.Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <AppNavigator/>
      </StyleProvider>
    );
  }
}

