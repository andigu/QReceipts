import React, { Component } from 'react'
import { Animated, Image, Text, View } from 'react-native'
import { Address, Date } from './index'
import { Icon, List, ListItem } from 'native-base'
import type { Item, Receipt } from '../types'

export default class ReceiptView extends Component<{ receipt: Receipt }> {
  render () {
    const receipt = this.props.receipt
    const monospace = {fontFamily: 'monospace'}
    return <View>
      <Image source={{uri: this.props.receipt.vendor.img}} style={{height: 100}} resizeMode='contain'/>
      <Text style={{textAlign: 'center', fontSize: 24, ...monospace}}>
        {receipt.vendor.name}
      </Text>
      <Address style={{textAlign: 'center', fontSize: 11, marginBottom: 10, ...monospace}}
               location={receipt.vendor.location}/>
      <Date style={{textAlign: 'center', fontSize: 11, marginBottom: 10, ...monospace}}
            dateInMs={receipt.date}
            format={'MM/DD/YYYY'}/>
      <List>
        {receipt.items.map((item, i) => <ItemView item={item} key={i}/>)}
      </List>
      <View style={{paddingTop: 10}}>
        <Text style={{textAlign: 'right', fontSize: 18, ...monospace, paddingBottom: 15}}>
          <Text style={{fontWeight: '100'}}>Subtotal:</Text>
          <Text style={{fontWeight: '900'}}>${receipt.subtotal / 100}</Text>
        </Text>
        <Text style={{textAlign: 'right', fontSize: 16, ...monospace, paddingBottom: 15}}>
          <Text style={{fontWeight: '100'}}>Tax:</Text>
          <Text style={{fontWeight: '900'}}>${receipt.tax / 100}</Text>
        </Text>
        <Text style={{textAlign: 'right', fontSize: 18, ...monospace}}>
          <Text style={{fontWeight: '100'}}>Total:</Text>
          <Text style={{fontWeight: '900'}}>${receipt.total / 100}</Text>
        </Text>
      </View>
    </View>
  }
}

class ItemView extends Component {
  height = new Animated.Value(0)

  state = {clicked: false}

  render () {
    const item: Item = this.props.item
    const monospace = {fontFamily: 'monospace'}
    return <ListItem onPress={() => {
      Animated.timing(this.height, {
        toValue: this.state.clicked ? 0 : 1,
        duration: 100,
      }).start()
      this.setState({clicked: !this.state.clicked})
    }} style={{flexDirection: 'column'}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{alignSelf: 'flex-start', flex: 1}}>
          <Text style={{...monospace}}>
            {item.quantity} {item.name}
          </Text>
        </View>
        <View style={{alignSelf: 'flex-end', justifyContent: 'flex-end', flex: 1, flexDirection: 'row'}}>
          <Text style={{...monospace, textAlign: 'right'}}>${item.total / 100}</Text>
          <Animated.View style={{
            marginTop: 2, marginLeft: 10, transform: [{
              rotate: this.height.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '180deg'],
              })
            }]
          }}>
            <Icon name="ios-arrow-down" style={{fontSize: 18}}/>
          </Animated.View>
        </View>
      </View>
      <Animated.View style={{height: Animated.multiply(this.height, 200)}}>
        <Image source={{uri: item.img}} style={{flex: 1, height: 75, width: 400}} resizeMode="contain"/>
      </Animated.View>
    </ListItem>
  }
}
