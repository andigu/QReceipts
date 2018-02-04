import React, { Component } from 'react'
import { Animated, Dimensions, TouchableOpacity, View } from 'react-native'
import MapView from 'react-native-maps'
import { Body, Card, Container, Header, Icon, Left, Title } from 'native-base'
import ReceiptView from '../lib/Receipt'
import config from '../config'
import { query } from '../lib/utils'

const {width: screenWidth, height: screenHeight} = Dimensions.get('window')

export default class Details extends Component {
  _node
  scroll = new Animated.Value(0)

  state = {
    receipt: null
  }

  componentDidMount () {
    fetch(query(`${config.api}/receipts`, {id: this.props.navigation.state.params.id})).then((res) => res.json()).then((res) => {
      this.setState({receipt: res.data[0]})
    })
  }

  render () {
    if (this.state.receipt) {
      const receipt = this.state.receipt
      const coord = {
        latitude: parseFloat(receipt.vendor.location.lat),
        longitude: parseFloat(receipt.vendor.location.lng)
      }
      return <Container>
        <Header>
          <Left>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("Home")
            }}>
            <Icon name="arrow-back" style={{color: 'white'}}/>
            </TouchableOpacity>
          </Left>
          <Body>
          <Title>{receipt.vendor.name}</Title>
          </Body>
        </Header>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event([{nativeEvent: {contentOffset: {y: this.scroll}}}], {useNativeDriver: true})}
          scrollEventThrottle={1}>
          <View>
            <Animated.View style={{transform: [{translateY: Animated.multiply(this.scroll, 0.75)}]}}>
              <MapView style={{width: screenWidth, height: screenHeight * 0.75}}
                       onMapReady={() => {
                         this._node.animateToRegion({
                           ...coord,
                           latitudeDelta: 0.1,
                           longitudeDelta: 0.05,
                         }, 1000)
                       }}
                       ref={(node) => {
                         if (!this._node) {
                           this._node = node

                         }
                       }}>
                <MapView.Marker coordinate={coord}/>
              </MapView>
            </Animated.View>
            <Card style={{marginLeft: 20, marginRight: 20, paddingHorizontal: 10, paddingVertical: 15}}>
              <ReceiptView receipt={receipt}/>
            </Card>
          </View>
        </Animated.ScrollView>
      </Container>
    } else {
      return null
    }
  }
}
