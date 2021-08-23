import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';

import {SearchBar} from 'react-native-elements';

import Icon from 'react-native-vector-icons/dist/Ionicons';
import img from '../images/people1.png';

export default class Chat extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
  };
  render() {
    return (
      <View style={styles.parent}>
        <TouchableOpacity>
          <Text style={styles.title1}>Filter</Text>
        </TouchableOpacity>
        <View style={styles.parent2}>
          <Text style={styles.title2}>Chat</Text>
          <SearchBar
            style={styles.search}
            containerStyle={styles.seacrhWrap}
            inputStyle={styles.seacrhWrap2}
            inputContainerStyle={styles.seacrhWrap3}
            placeholder="Where you want to go?"
            onChangeText={this.updateSearch}
            value={this.state.search}
            searchIcon={{size: 28}}
          />
          <View style={styles.box1}>
            <View style={styles.imgWrap}>
              <Image style={styles.img} source={img} />
            </View>
            <View style={styles.box2}>
              <Text style={styles.name}>Soham Henry</Text>
              <Text style={styles.chat}>Me: Bro, just fuck off</Text>
            </View>
            <View style={styles.box3}>
              <Text style={styles.chat}>8:30</Text>
              <Icon name="checkmark-done" color="#6DDA6B" size={30} />
            </View>
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

  seacrhWrap: {
    backgroundColor: '#F2F3F4',
    borderColor: '#F2F3F4',
    borderRadius: 10,
    borderWidth: 0,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    marginTop: 20,
  },
  seacrhWrap2: {
    backgroundColor: '#F2F3F4',
    borderColor: '#F2F3F4',
    fontSize: 14,
  },
  seacrhWrap3: {
    backgroundColor: '#F2F3F4',
    borderColor: '#F2F3F4',
  },
  search: {
    backgroundColor: '#F2F3F4',
    borderColor: '#F2F3F4',
  },
  imgWrap: {
    backgroundColor: '#6DDA6B',
    width: 60,
    height: 60,
    borderRadius: 15,
    // marginRight: 30,
  },
  img: {
    width: 60,
    height: 60,
  },
  box1: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box2: {
    marginRight: 40,
    justifyContent: 'center',
  },
  box3: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 5,
  },
  chat: {
    color: '#6B6B6B',
    fontWeight: '400',
  },
});
