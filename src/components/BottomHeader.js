import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Icon2 from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/dist/Feather';

export default class BottomHeader extends Component {
  render() {
    return (
      <View style={styles.parent2}>
        <View style={styles.parent}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('booking')}
            style={styles.parent3}>
            <Icon name="calendar" color="#979797" size={30} />
            <Text style={styles.h1}>My Booking</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('home')}
            style={styles.parent3}>
            <Icon2 name="compass" color="#7ECFC0" size={60} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('profile')}
            style={styles.parent3}>
            <Icon3 name="user" color="#979797" size={30} />
            <Text style={styles.h1}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 46,
  },
  parent2: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  parent3: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  h1: {
    color: '#979797',
    fontSize: 13,
  },
});
