import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

import BookingHeader from '../components/BookingHeader';
import BottomHeader from '../components/BottomHeader';
import vector from '../images/vector.png';

export default class Booking extends Component {
  updateSearch = search => {
    this.setState({search});
  };
  render() {
    return (
      <View style={styles.parent}>
        <BookingHeader navigation={this.props.navigation} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('bookingDetail')}
          style={styles.shadowbox}>
          <Text>Monday, 20 July ‘20 - 12:33</Text>
          <View style={styles.wrap1}>
            <Text style={styles.h1}>IDN</Text>
            <View style={styles.imgWrap}>
              <Image source={vector} />
            </View>
            <Text style={styles.h1}>JPN</Text>
          </View>
          <View style={styles.wrap2}>
            <Text style={styles.h2}>Garuda Indonesia, AB-221</Text>
          </View>
          <View style={styles.wrap3}>
            <Text style={styles.h3}>Status</Text>
            <View style={styles.btn1}>
              <Text style={styles.btn1h}>Waiting for payment</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('bookingDetail')}
          style={styles.shadowbox2}>
          <Text>Monday, 20 July ‘20 - 12:33</Text>
          <View style={styles.wrap1}>
            <Text style={styles.h1}>IDN</Text>
            <View style={styles.imgWrap}>
              <Image source={vector} />
            </View>
            <Text style={styles.h1}>JPN</Text>
          </View>
          <View style={styles.wrap2}>
            <Text style={styles.h2}>Garuda Indonesia, AB-221</Text>
          </View>
          <View style={styles.wrap3}>
            <Text style={styles.h3}>Status</Text>
            <View style={styles.btn2}>
              <Text style={styles.btn1h}>Eticket issued</Text>
            </View>
          </View>
        </TouchableOpacity>

        <BottomHeader navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  shadowbox: {
    marginHorizontal: 25,
    backgroundColor: '#fff',
    marginTop: 20,
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
  },
  wrap2: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: '#E5E5E5',
  },
  wrap3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  imgWrap: {
    paddingHorizontal: 25,
  },
  h1: {
    fontSize: 20,
    fontWeight: '600',
  },
  h2: {
    color: '#979797',
  },
  h3: {
    color: '#7A7A7A',
    fontWeight: '600',
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
});
