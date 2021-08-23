import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default class Notif extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <TouchableOpacity>
          <Text style={styles.title1}>Clear</Text>
        </TouchableOpacity>
        <View style={styles.parent2}>
          <Text style={styles.title2}>Notifications</Text>
          <View style={styles.box1}>
            <Text style={styles.h1}>Congratulations</Text>
            <Text style={styles.h2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore....
            </Text>
            <Text style={styles.h3}>5h ago</Text>
          </View>

          <View style={styles.box2}>
            <Text style={styles.t1}>Congratulations</Text>
            <Text style={styles.h2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore....
            </Text>
            <Text style={styles.h3}>1 June 2020, 12:33 AM</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
  },
  parent2: {
    marginHorizontal: 20,
  },
  title1: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2395FF',
    marginTop: 45,
    textAlign: 'right',
    marginHorizontal: 20,
  },
  title2: {
    paddingTop: 20,
    fontSize: 32,
    fontWeight: '600',
  },
  box1: {
    borderWidth: 1,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 13,
    borderColor: '#7ECFC0',
    backgroundColor: '#effdfa',
    marginTop: 30,
  },
  box2: {
    borderWidth: 1,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 13,
    borderColor: '#D7D7D7',
    backgroundColor: 'white',
    marginTop: 20,
  },
  h1: {
    fontSize: 16,
    fontWeight: '700',
    color: '#5dcab6',
    paddingBottom: 10,
  },
  t1: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    paddingBottom: 10,
  },
  h2: {
    color: '#6B6B6B',
    lineHeight: 18,
    paddingBottom: 20,
  },
  h3: {
    color: '#6B6B6B',
  },
});
