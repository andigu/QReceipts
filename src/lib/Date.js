import React from 'react'
import { Text } from 'react-native'
import { unix } from 'moment'

export default ({dateInMs, style, format}) => <Text style={style}>
  {unix(dateInMs).format(format)}
</Text>
