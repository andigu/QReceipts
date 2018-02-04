import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Chart from '../chart/Chart'
import { height, totalSize, width } from 'react-native-dimension'

const styles = StyleSheet.create({
  container: {
    //marginTop: height(19),
    //height:height(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  chart: {
    width: width(90),
    height: height(50),
    marginTop: height(5),
  },
  topBar: {
    backgroundColor: 'rgb(76, 74, 74)',
    height: height(8),
    width: width(100),
  },

  topBarText: {
    color: 'rgba(255,255,255,1)',
    textAlign: 'center',
    fontFamily: 'AvenirNext-Bold',
    marginTop: height(2),
    fontSize: totalSize(2.8),
  },
})

const data = [
  [0, 1],
  [1, 3],
  [2, 5],
  [3, 7],
  [4, 5],
]

export default class Analytics extends Component {
  render () {
    return (
      <View>
        <View style={styles.topBar}>
          <Text style={styles.topBarText}>Analytics</Text>
        </View>

        <ScrollView style={{backgroundColor: '#f2f2f2', height: height(100)}}>
          <View style={styles.container}>
            <Text style={{fontFamily: 'AvenirNext-Bold', color: 'rgb(76,74,74)', marginTop: height(3)}}>Past Month
              Spending</Text>
            <View style={{height: height(30)}}>
              <Chart
                style={styles.chart}
                data={data}
                verticalGridStep={5}
                type="line"
                showGrid={false}
                showDataPoint
              />
            </View>
            <Text style={{fontFamily: 'AvenirNext-Bold', color: 'rgb(76,74,74)', marginTop: height(5)}}>Spending
              Distribution</Text>
            <View style={{height: height(30)}}>
              <Chart style={{height: height(100), width: width(100), marginLeft: width(20), marginTop: height(3)}}
                     data={data}
                     type="pie"
                     showAxis={false}
                     showDataPoint/>
            </View>

            <Image source={require('../../assets/images/legend.png')}
                   style={{
                     height: height(30),
                     width: width(30),
                     position: 'absolute',
                     top: height(46),
                     left: width(65),
                   }}/>
          </View>

          <View style={{
            flex: 1,
            flexDirection: 'row',
          }}>
            <Text style={{
              marginTop: height(5),
              marginLeft: width(16),
              fontFamily: 'AvenirNext-Bold',
              color: 'rgb(76,74,74)',
              fontSize: totalSize(3)
            }}>Total Spending: $3500</Text>


          </View>
        </ScrollView>
      </View>
    )
  }
}
