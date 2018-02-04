import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  ImageBackground,
  AppRegistry,
  Image,

} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontFamily: 'Avenir-Roman',
    fontWeight: 'bold',
    textAlign  : 'center',
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

  state= {
    loginCheck: null,
    username: '',
    password: '',
  }

  static navigationOptions = {
    title: 'Login',
    header: null,
  }


  _onPressButton() { //on press login
      //if(this.state.username in database){ //check if username in database
        //if(database[this.state.username] === this.state.password){ //if yes, check if password matches
        this.setState({loginCheck: !this.state.loginCheck})

      return this.state.loginCheck
  };


  render() {

    StatusBar.setHidden(true);
    //var database = require('./database.json');
    //const {navigate} = this.props.navigation

    return (
      <View style={{backgroundColor: "rgb(76,74,74)", height:height(100)}}>

        <Image source={require('./logoreceipt.png')} style={{height:height(30), width:width(50), marginLeft:width(25), marginTop:height(10)}}/>
        <Text style={styles.title}>qReceipt</Text>

        <TextInput
          style={{
            height:height(5),
            padding: 5,
            marginLeft: width(15),
            borderColor:"rgba(0, 0, 0, 0.1)",
            borderWidth: 1,
            marginTop:height(2),
            width: width(70),
            backgroundColor: 'white',
          }}
          placeholder= "Username or Email"
          maxLength = {25}
          autoCapitalize = 'none'
          returnKeyLabel = {'next'}
          onChangeText= {(text) => this.setState({username: text})}
        />

        <TextInput
          style={{
            height:height(5),
            padding: 5,
            marginLeft: width(15),
            borderColor:"rgba(0, 0, 0, 0.1)",
            borderWidth: 1,
            marginTop:height(2),
            width: width(70),
            backgroundColor: 'white',
          }}
          placeholder = "Password"
          maxLength = {20}
          secureTextEntry = {true}
          returnKeyLabel={"next"}
          onChangeText= {(text) => this.setState({password:text})}
        />

        <View style={{backgroundColor: 'rgba(0,0,0,0)', marginTop: height(5)}}>
          <TouchableOpacity onPress={() => this._onPressButton()}>
              <Text style={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Arial',
                height: height(8),
                fontSize: totalSize(2.5),
              }}>Login</Text>
          </TouchableOpacity>

          <Text style={{ // invalid login pop-up
            color: (this.state.loginCheck == false ? 'white': 'rgba(0,0,0,0)'),
            fontFamily: 'Verdana',
            textAlign: 'center',
            marginTop: height(19),//21.5
            height: height(8),
            padding: height(2.4),
            fontSize: totalSize(2),
            backgroundColor: (this.state.loginCheck == false ? 'rgba(255,80,80,0.7)': 'rgba(0,0,0,0)')
            }}> Invalid Username, Email, or Password </Text>
          </View>
      </View>
    )
  }
}
