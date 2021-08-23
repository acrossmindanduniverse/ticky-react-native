import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

import garuda from '../images/garuda2.png';
import vector from '../images/vector.png';
import qrcode from '../images/qrcode.png';

export default class BookingDetail extends Component {
  updateSearch = search => {
    this.setState({search});
  };
  render() {
    return (
      <View style={styles.parent}>
        <View>
          <Text style={styles.title}>Booking Pass</Text>
        </View>
        <TouchableOpacity style={styles.shadowbox}>
          <View style={styles.garudaWrap}>
            <Image style={styles.garuda} source={garuda} />
          </View>
          <View style={styles.wrap1}>
            <Text style={styles.h1}>IDN</Text>
            <View style={styles.imgWrap}>
              <Image source={vector} />
            </View>
            <Text style={styles.h1}>JPN</Text>
          </View>
          <View style={styles.wrap2}>
            <View style={styles.issue}>
              <Text style={styles.h2}>Eticket issued</Text>
            </View>
          </View>
          <View style={styles.row1}>
            <View>
              <Text style={styles.h3}>Status</Text>
              <Text style={styles.h6}>AB-221</Text>
            </View>
            <View>
              <Text style={styles.h3}>Class</Text>
              <Text style={styles.h6}>Economy</Text>
            </View>
            <View>
              <Text style={styles.h3}>Terminal</Text>
              <Text style={styles.h6}>A</Text>
            </View>
            <View>
              <Text style={styles.h3}>Gate</Text>
              <Text style={styles.h6}>221</Text>
            </View>
          </View>
          <View style={styles.wrapper1}>
            <Text style={styles.h3}>Departure</Text>
            <Text style={styles.h6}>Monday, 20 July ‘20 - 12:33</Text>
          </View>
          <View style={styles.qrWrap}>
            <Image source={qrcode} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#7ECFC0',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 80,
    paddingTop: 30,
  },
  shadowbox: {
    marginHorizontal: 25,
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 12,
    height: 550,
    paddingHorizontal: 30,
    // alignItems: 'center',
    paddingVertical: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  shadowbox2: {
    marginHorizontal: 25,
    backgroundColor: '#fff',
    marginTop: 30,
    borderRadius: 12,
    height: 180,
    paddingHorizontal: 20,
    // alignItems: 'center',
    paddingVertical: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  wrap1: {
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'center',
  },
  wrap2: {
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderColor: '#E5E5E5',
  },
  wrapper1: {
    paddingTop: 20,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  issue: {
    backgroundColor: '#4FCF4D',
    marginHorizontal: 60,
    borderRadius: 6,
    marginTop: 10,
  },
  imgWrap: {
    paddingHorizontal: 25,
  },
  h1: {
    fontSize: 20,
    fontWeight: '600',
  },
  h2: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
  },
  h3: {
    color: '#7A7A7A',
    fontWeight: '400',
    paddingBottom: 5,
  },
  btn1: {
    backgroundColor: '#FF7F23',
    height: 35,
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  btn2: {
    backgroundColor: '#4FCF4D',
    height: 35,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  btn1h: {
    color: 'white',
    fontWeight: '600',
  },
  garudaWrap: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },

  // garuda: {
  //   width: 110,
  //   height: 60,
  // },
  qrWrap: {
    alignItems: 'center',
    marginTop: 10,
  },
});
