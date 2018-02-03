//main feed
/*To DO:
2. GraphQL Link up boii
*/
import React, { Component } from 'react'
import { Animated, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native'
import { height, totalSize, width } from 'react-native-dimension'

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

  title: {
    marginBottom: height(23),
    marginLeft: width(5),
    fontSize: totalSize(2.5),
    fontFamily: 'Avenir-Heavy',
    color: 'rgba(0,0,0,0.6)',
  },

  description: {
    width: width(95),
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
    left: width(3),
    top: height(5.5),
  },

  descriptionText: {
    fontSize: totalSize(1.5),
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

_keyExtractor = (item, index) => item.id

export default class Receipts extends Component {

  state = {
    searchPressed: null,
    searchText: '',
  }

  static navigationOptions = {
    title: 'Home',
    header: null,

  }

  componentWillMount () {
    this.animatedValue = new Animated.Value(1)
  }

  componentDidMount () {
    Animated.timing(this.animatedValue, {
      toValue: 0.3,
      duration: 200,
    }).start()
  }

  _searchPressed () {
    if (this.state.searchPressed == false || this.state.searchPressed == null) {
      this.setState({searchPressed: true})
    }
  }

  _onPressCancel () {
    this.setState({searchText: ''})
    //this.setState({searchPressed: false})
  }

  render () {
    const database = require('./database')
    const animatedStyle = {marginLeft: this.animatedValue}
    return (
      <View style={{
        backgroundColor: '#f2f2f2',
        height: height(100),
      }}>
        <View style={styles.topBar}>
          <Text style={styles.topBarText}>Receipts</Text>
        </View>

        <View style={{
          height: height(6.15),
          backgroundColor: 'rgba(255, 255, 255, 1)',
        }}>
          <Image
            source={require('./assets/images/search.png')}
            style={{
              tintColor: 'rgba(200,200,200,1)',
              height: totalSize(2),
              width: totalSize(2),
              position: 'absolute',
              top: height(1.9),
              left: width(2),
              zIndex: 1,
            }}
          />
          <TextInput
            style={{
              height: height(6),
              width: width(93),
              marginLeft: width(7),
              padding: 5,
              backgroundColor: 'white',
              zIndex: 0,
            }}
            value={this.state.searchText}
            onChangeText={(text) => this.setState({searchText: text})}
            onSelectionChange={() => this._searchPressed()}
            placeholder="Search"
            autoCapitalize="none"
          />

          {(() => {
            if (this.state.searchPressed) {
              return <TouchableOpacity
                onPress={() => this._onPressCancel()}
                style={{
                  position: 'absolute',
                  left: width(85),
                  top: height(2),
                }}>
                <View style={{
                  backgroundColor: 'rgba(0,0,0,0)',
                }}>
                  <Text style={{
                    color: 'rgb(100, 174, 239)'
                  }}>Cancel</Text>
                </View>
              </TouchableOpacity>
            }
          })()}

          <View style={{
            backgroundColor: '#f2f2f2',
            height: height(0.15),
          }}/>
        </View>


        <FlatList
          data={database.names.charities}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => (
            <View style={styles.item}>

              <View style={styles.iconView}>

                <TouchableOpacity style={{
                  height: height(5),
                  marginBottom: height(12),
                }}>
                  <Text style={styles.title}>{item.name}</Text>
                </TouchableOpacity>

              </View>

              <View style={styles.description}>
                <Text style={styles.descriptionText}>   {item.description}</Text>

                <TouchableOpacity>
                  <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    padding: 2,
                  }}>
                    <Image
                      source={require('./assets/images/location.png')}
                      style={[styles.icons, {tintColor: 'rgb(140, 140, 140)'}]}
                    />

                    <Text style={[styles.descriptionText, {
                      marginTop: height(1.25),
                      marginLeft: width(1)
                    }]}>{item.address}</Text>

                  </View>
                </TouchableOpacity>

                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  padding: 2,
                }}>
                  <Image
                    source={require('./assets/images/phone.png')}
                    style={[styles.icons, {tintColor: 'rgb(140, 140, 140)'}]}
                  />

                  <Text style={[styles.descriptionText, {
                    marginTop: height(1.25),
                    marginLeft: width(2)
                  }]}>{item.number}</Text>

                  <TouchableOpacity>
                    <Image
                      source={require('./assets/images/go.png')}
                      style={[styles.icons, {tintColor: 'rgb(140, 140, 140)', marginLeft: width(57.5)}]}
                    />
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          )}
        />

      </View>
    )
  }
}
