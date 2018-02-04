import React, { Component } from 'react'
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { height, totalSize, width } from 'react-native-dimension'
import { Container, Content, Form, Input, Item, Label, Toast } from 'native-base'

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontFamily: 'Avenir-Roman',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: totalSize(4),
    backgroundColor: 'rgba(0,0,0,0)'
  },

  container: {
    flex: 1,
    width: width(100),
    height: height(100),
  }
})

export default class HomeScreen extends Component {

  state = {
    username: '',
    password: '',
  }

  render () {
    StatusBar.setBackgroundColor('#656363')
    return (
      <Container>
        <Content>
          <View style={{backgroundColor: 'rgb(76,74,74)', height: height(100)}}>

            <Image source={require('../../logoreceipt.png')}
                   style={{height: height(30), width: width(50), marginLeft: width(25), marginTop: height(10)}}/>
            <Text style={styles.title}>qReceipt</Text>

            <Form>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>Username</Label>
                <Input style={{color: 'white'}} onChangeText={(x) => {
                  this.setState({username: x})
                }}/>
              </Item>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>Password</Label>
                <Input style={{color: 'white'}} onChangeText={(x) => {
                  this.setState({password: x})
                }}/>
              </Item>
            </Form>

            <View style={{marginTop: height(5)}}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 15
                }}
                onPress={() => {
                  if (this.state.username === 'arjun') {
                    console.log(this.props.navigation.navigate("App"))
                  } else {
                    Toast.show({
                      text: 'Wrong credentials!',
                      position: 'bottom',
                      buttonText: 'Okay'
                    })
                  }
                }}>
                <Text style={{
                  color: 'white',
                  textAlign: 'center',
                  fontFamily: 'Arial',
                  fontSize: totalSize(2.5),
                }}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}
