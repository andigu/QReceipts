import React from 'react'
import { View } from 'react-native'
import { Icon } from 'native-base'

export default ({iconName, children}) =>
  <View style={{flexDirection: 'row'}}>
    <Icon name={iconName} style={{color: 'rgb(76,74,74)', fontSize: 21, marginRight: 7}}/>
    {children}
  </View>
