import React, { Component } from 'react'
import { Animated, Dimensions, Text, TouchableOpacity, View } from 'react-native'
import { totalSize } from 'react-native-dimension'
import {
  Body,
  Container,
  Fab,
  Header,
  Icon,
  Input,
  Item,
  Left,
  List,
  ListItem,
  Right,
  Thumbnail,
  Title
} from 'native-base'
import { Address, Date, IconRow, Tags } from '../lib'
import { query } from '../lib/utils'
import config from '../config'
import type { Receipt } from '../types'

const {width: screenWidth} = Dimensions.get('window')

export default class Receipts extends Component {
  fullData = []
  state = {
    searchPressed: false,
    data: []
  }

  componentDidMount () {
    fetch(query(`${config.api}/receipts`, {user_id: 1})).then((res) => res.json()).then((res) => {
      this.fullData = res.data
      this.setState({data: this.fullData})
    })
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
                this.setState({data: this.fullData})
                Animated.timing(this.searchBarWidth, {
                  toValue: 0,
                  duration: 200
                }).start(() => {
                  this.setState({searchPressed: false})
                })
              }}><Icon name="arrow-back" style={{color: 'black'}}/></TouchableOpacity>
              <Input autoFocus placeholder="Search" onChangeText={(searchText) => {
                this.setState({data: this.fullData.filter((x) => x.vendor.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)})
              }}/>
            </Item>
          </Animated.View>
        </Header> : <Header>
          <Left>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('DrawerToggle')}}>
              <Icon name="menu" style={{color: 'white'}}/>
            </TouchableOpacity>
          </Left>
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
          {this.state.data.map((item: Receipt, i) =>
            <ListItem key={i} onPress={() => {
              this.props.navigation.navigate('Details', {id: item.id})
            }}>
              <Thumbnail square size={80} source={{uri: item.vendor.img}}/>
              <Body style={{paddingLeft: 20}}>
              <View style={{flexDirection: 'row'}}>
              <Text style={{
                fontSize: totalSize(3),
                fontFamily: 'Avenir-Heavy',
                color: 'rgba(0,0,0,0.6)',
                marginRight: 12
              }}> {item.vendor.name}</Text>
                <Tags tags={item.items.map((x) => x.tag).filter((e, i, s) => i === s.indexOf(e))} style={{flex:1}}/>
              </View>
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
        <Fab position="bottomRight"
             style={{backgroundColor: '#424242'}}
             onPress={() => {
               this.props.navigation.navigate('Add')
             }}>
          <Icon name="add" style={{color: 'white'}}/>

        </Fab>
      </Container>
    )
  }
}
