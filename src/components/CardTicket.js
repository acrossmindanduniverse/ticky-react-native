import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import vector from '../images/vector.png';
import {useNavigation} from '@react-navigation/native';

const CardTicket = ({
  img,
  onPress,
  departure,
  depTime,
  destination,
  desTime,
  price,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper2}>
      <View style={styles.boxrow}>
        <View style={styles.boxGaruda}>
          <Image style={styles.img} source={img} />
        </View>

        <View>
          <View style={styles.box1}>
            <View>
              <Text style={styles.h2}>{departure}</Text>
              <Text style={styles.jam}>{depTime}</Text>
            </View>
            <View style={styles.boxCenter}>
              <Image source={vector} />
            </View>
            <View>
              <Text style={styles.h2}>{destination}</Text>
              <Text style={styles.jam}>{desTime}</Text>
            </View>
          </View>

          <View style={styles.box2}>
            <Text style={styles.jam2}>3 hours 11 minutes</Text>
            <Text style={styles.dollar}>$ {price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardTicket;

const styles = StyleSheet.create({
  boxrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 22,
    borderWidth: 1,
    borderColor: '#979797',
    borderRadius: 7.5,
  },
  boxGaruda: {
    justifyContent: 'center',
    paddingRight: 20,
  },
  img: {
    width: 60,
    height: 34,
  },
  box1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  h2: {
    fontWeight: '500',
    fontSize: 24,
  },
  jam: {
    color: '#6B6B6B',
  },
  jam2: {
    color: '#6B6B6B',
  },
  dollar: {
    color: '#2395FF',
    fontWeight: 'bold',
  },
  boxCenter: {
    paddingHorizontal: 45,
    paddingTop: 10,
  },
  wrapper2: {
    marginBottom: 10,
  },
});
