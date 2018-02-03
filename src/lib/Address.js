import React, { Component } from 'react'
import { Text } from 'react-native'
import config from '../config'
import { query } from './utils'

export default class Address extends Component<{ style: any, location: { lat: Number, lng: Number } }> {
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
