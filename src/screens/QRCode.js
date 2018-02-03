import React, { Component } from 'react'
import { Animated, Vibration, View, StyleSheet } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { Icon } from 'native-base'

export default class QRCode extends Component {
  opacity = new Animated.Value(0)
  rotate = this.opacity.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })
  scale = this.opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 1.5]
  })

  render () {
    return <View style={{flex:1}}>
      <QRCodeScanner style={{flex:1}} onRead={({data: id}) => {
        Vibration.vibrate()
        Animated.timing(this.opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        }).start()
      }}/>
      <Animated.View style={{...StyleSheet.absoluteFillObject, backgroundColor: "rgba(129,199,132,0.7)", opacity: this.opacity, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View style={{transform:[{rotate: this.rotate}, {scale: this.scale}]}}>
        <Icon name="checkmark" style={{color: 'white', fontSize: 70}}/>
        </Animated.View>
      </Animated.View>
    </View>
  }
}
