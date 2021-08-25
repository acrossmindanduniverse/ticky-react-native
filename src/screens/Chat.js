/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable radix */
import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {APP_URL_LOCAL} from '@env';
import {io} from 'socket.io-client';
import {SearchBar} from 'react-native-elements';

import Icon from 'react-native-vector-icons/dist/Ionicons';
import img from '../images/people1.png';
import {connect} from 'react-redux';
import {getChatList} from './../redux/actions/chat';
import {FlatList} from 'react-native-gesture-handler';

const Chat = props => {
  const log = console.log;
  const socket = io(`${APP_URL_LOCAL}`);
  const {chatList} = props.chat;
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJFJwY0E2NHlqeW1EbE11SXdZYjZzSWVoQVdzWWxkbmpXTDZnNnhiaEZSTWRCOU5HNHVwam51IiwiaWF0IjoxNjI5ODAxMjg1LCJleHAiOjE2Mjk4ODc2ODV9.1YiBd1Ye8YsLQ1ia4LY2LZCWV3Fj6Sft3iAvzqr7P04';
  const timeFormat = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  log(chatList);

  useEffect(() => {
    socket.on(parseInt('1'), data => {
      props.getChatList(token);
      log(data, 'real time');
    });
  }, []);

  useEffect(() => {
    props.getChatList(token);
  }, []);

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
          // onChangeText={updateSearch}
          // value={state.search}
          searchIcon={{size: 28}}
        />
        <FlatList
          data={chatList}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => props.navigation.navigate('roomChat', item)}
              style={styles.box1}>
              <View style={styles.imgWrap}>
                {log(item, 'chat list')}
                <Image style={styles.img} source={img} />
              </View>
              <View style={styles.box2}>
                <Text style={styles.name}>Soham Henry</Text>
                <Text style={styles.chat}>{item.message}</Text>
              </View>
              <View style={styles.box3}>
                <Text style={styles.chat}>{`${new Date(item.createdAt)
                  .toLocaleDateString('en-US', timeFormat)
                  .slice(0, 9)}`}</Text>
                <Icon name="checkmark-done" color="#6DDA6B" size={30} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

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

const mapStateToProps = state => ({
  chat: state.chat,
});

const mapDispatchToProps = {getChatList};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
