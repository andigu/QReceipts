import React, { Component } from 'react'
import { Animated, Dimensions, Text, TouchableOpacity } from 'react-native'
import { totalSize } from 'react-native-dimension'
import { Body, Container, Header, Icon, Input, Item, List, ListItem, Right, Thumbnail, Title } from 'native-base'
import { Address, Date, IconRow } from '../lib'

const {width: screenWidth} = Dimensions.get('window')
const data = require('../mock').receipts

export default class Receipts extends Component {
  state = {
    searchPressed: false,
    data
  }
  searchBarWidth = new Animated.Value(0)

  render () {
    return (
      <Container style={{backgroundColor: 'white'}}>
        {this.state.searchPressed ? <Header searchBar rounded>
          <Animated.View style={{
            width: this.searchBarWidth
          }}>
            <Item>
              <TouchableOpacity onPress={() => {
                this.setState({data})
                Animated.timing(this.searchBarWidth, {
                  toValue: 0,
                  duration: 200
                }).start(() => {
                  this.setState({searchPressed: false})
                })
              }}><Icon name="arrow-back" style={{color: 'black'}}/></TouchableOpacity>
              <Input autoFocus placeholder="Search" onChangeText={(searchText) => {
                this.setState({data: data.filter((x) => x.vendor.name.toLowerCase().indexOf(searchText) !== -1)})
              }}/>
            </Item>
          </Animated.View>
        </Header> : <Header>
          <Body>
          <Title>
            Receipts
          </Title>
          </Body>
          < Right>
            < TouchableOpacity rounded onPress={() => {
              this.setState({searchPressed: true})
              Animated.timing(this.searchBarWidth, {
                toValue: screenWidth,
                duration: 200
              }).start()
            }}>
              <Icon name='search' style={{color: 'white', fontSize: 24}}/>
            </TouchableOpacity>
          </Right>
        </Header>}
        <List>
          {this.state.data.map((item, i) =>
            <ListItem key={i} onPress={() => {}}>
              <Thumbnail square size={80} source={{uri: item.vendor.img}}/>
              <Body style={{paddingLeft: 20}}>
              <Text style={{
                fontSize: totalSize(3),
                fontFamily: 'Avenir-Heavy',
                color: 'rgba(0,0,0,0.6)'
              }}> {item.vendor.name}</Text>
              <IconRow iconName="pin">
                <Address style={{fontSize: 14}} location={item.vendor.location}/>
              </IconRow>
              <IconRow iconName="calendar">
                <Date style={{fontSize: 14}} dateInMs={item.date} format={'MM/DD/YYYY'}/>
              </IconRow>
              <Text style={{alignSelf: 'flex-end', fontWeight: '500', fontSize: 20}}>${item.total / 100}</Text>
              </Body>
            </ListItem>
          )}
        </List>

      </Container>
    )
  }
}
