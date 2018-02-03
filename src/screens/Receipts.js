//main feed
/*To DO:
2. GraphQL Link up boii
*/
import React, { Component } from 'react'
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { height, totalSize, width } from 'react-native-dimension'
import { Body, Container, Header, Icon, Input, Item, List, ListItem, Right, Thumbnail, Title } from 'native-base'
import Address from '../lib/Address'
import IconRow from '../lib/IconRow'
import Date from '../lib/Date'

const {width: screenWidth} = Dimensions.get('window')

export default class Receipts extends Component {
  state = {
    searchPressed: false,
    searchText: '',
    data: require('../mock').receipts
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
                Animated.timing(this.searchBarWidth, {
                  toValue: 0,
                  duration: 300
                }).start(() => {
                  this.setState({searchPressed: false})
                })
              }}><Icon name="arrow-back" style={{color: 'black'}}/></TouchableOpacity>
              <Input placeholder="Search" onChangeText={(searchText) => {
                this.setState({searchText})
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
                duration: 300
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

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height(20),
    marginBottom: height(2),
    backgroundColor: 'rgb(255,255,255)',
  },

  topBar: {
    backgroundColor: 'rgb(76, 74, 74)',
    height: height(8),
  },

  topBarText: {
    color: 'rgba(255,255,255,1)',
    textAlign: 'center',
    fontFamily: 'AvenirNext-Bold',
    marginTop: height(2),
    fontSize: totalSize(2.8),
  },

  search: {
    tintColor: 'rgba(255,255,255,1)',
    height: totalSize(3.5),
    width: totalSize(3.5),
    position: 'absolute',
    left: width(88),
    top: height(1.8),
  },

  title: {},

  description: {
    width: width(95),
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
    left: width(3),
    top: height(5.5),
  },

  descriptionText: {
    fontSize: totalSize(2),
    color: 'rgba(0,0,0,0.6)',
    fontFamily: 'Avenir-Roman',
  },

  checkOutButton: {
    backgroundColor: 'rgba(234, 234, 234, 0.3)',
    width: width(100),
    height: height(5),
    position: 'absolute',
    right: width(0),
    top: width(18),
  },

  icons: {
    height: totalSize(2.5),
    width: totalSize(2.5),
    marginLeft: width(2),
    marginTop: height(0.6),
  },

  iconView: {
    flex: 1,
    flexDirection: 'row',
  }
})
