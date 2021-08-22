import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import bg1 from '../images/bg1.jpg';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <Image style={styles.img1} source={bg1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#7ECFC0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img1: {
    height: 250,
    width: 250,
    borderRadius: 250,
  },
});
