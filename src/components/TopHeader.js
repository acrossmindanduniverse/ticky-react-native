import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';

export default class TopHeader extends Component {
  render() {
    return (
      <View>
        <View style={styles.parent2}>
          <Text style={styles.h1}> Explore </Text>
          <View style={styles.parent3}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('chat')}>
              <Icon
                style={styles.icon1}
                name="mail"
                color="#595959"
                size={25}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('notif')}>
              <Icon
                style={styles.icon2}
                name="bell"
                color="#595959"
                size={25}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  parent2: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  parent3: {
    paddingTop: 40,
    flexDirection: 'row',
  },
  icon2: {
    marginHorizontal: 25,
  },
});
