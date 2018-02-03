import React, { Component } from 'react'
import { unix } from 'moment/moment'
import { query } from './utils'
import { Text, View } from 'react-native'
import { Icon } from 'native-base'
import config from '../config'

export const IconRow = ({iconName, children}) =>
  <View style={{flexDirection: 'row'}}>
    <Icon name={iconName} style={{color: 'rgb(76,74,74)', fontSize: 21, marginRight: 7}}/>
    {children}
  </View>

export const Date = ({dateInMs, style, format}) => <Text style={style}>
  {unix(dateInMs).format(format)}
</Text>

export class Address extends Component<{ style: any, location: { lat: Number, lng: Number } }> {
  state = {
    text: ''
  }

  update = ({lat, lng}) => {
    fetch(query('https://maps.googleapis.com/maps/api/geocode/json', {
      latlng: `${lat},${lng}`,
      key: config.geo_code_key
    }), {
      method: 'GET',
    }).then((res) => res.json()).then(({results}) => {
      this.setState({text: results[0].formatted_address})
    })
  }

  componentDidMount () {
    this.update(this.props.location)
  }

  componentWillReceiveProps (props) {
    this.update(props.location)
  }

  render () {
    return <Text style={this.props.style}>
      {this.state.text}
    </Text>
  }
}
