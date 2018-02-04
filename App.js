import React from 'react'
import getTheme from './src/theme/components'
import material from './src/theme/variables/material'
import AppNavigator from './src/navigation'
import { Root, StyleProvider } from 'native-base'

export default class App extends React.Component {
  render () {
    return (
      <Root>

        <StyleProvider style={getTheme(material)}>
          <AppNavigator/>

        </StyleProvider>
      </Root>
    )
  }
}

