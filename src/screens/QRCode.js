import React, { Component } from 'react'
import { Vibration } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'

export default class QRCode extends Component {
  render () {
    return <QRCodeScanner onRead={(e) => {
      console.log(e)
      Vibration.vibrate()
    }}/>
  }
}
