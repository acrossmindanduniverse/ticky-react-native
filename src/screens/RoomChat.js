/* eslint-disable radix */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef, useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';

import img from '../images/chat1.png';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Input} from 'react-native-elements';
import {sendChat, getChatRoom} from '../redux/actions/chat';
import {connect} from 'react-redux';
import {io} from 'socket.io-client';
import {APP_URL_LOCAL} from '@env';
import {TextInput} from 'react-native-gesture-handler';

const RoomChat = props => {
  const log = console.log;
  const socket = io(`${APP_URL_LOCAL}`);

  const route = props.route;
  const {chatRoom} = props.chat;
  const scrollView = useRef();
  const [chatData, setChatData] = useState({
    message: '',
    // attachment: '',
  });
  const timeFormat = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const id = '1';
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJFJwY0E2NHlqeW1EbE11SXdZYjZzSWVoQVdzWWxkbmpXTDZnNnhiaEZSTWRCOU5HNHVwam51IiwiaWF0IjoxNjI5ODAxMjg1LCJleHAiOjE2Mjk4ODc2ODV9.1YiBd1Ye8YsLQ1ia4LY2LZCWV3Fj6Sft3iAvzqr7P04';

  const handleScrollToBottom = () => {
    scrollView.current.scrollToEnd({animated: true});
  };

  useEffect(() => {
    socket.on(route.params, data => {
      props.getChatRoom(token, data.sender);
      log(data, 'real time');
    });
  }, []);

  log(route, 'route');

  useEffect(() => {
    props.getChatRoom(
      token,
      route.params.sender !== parseInt(id)
        ? route.params.sender
        : route.params.recipient,
    );
  }, [route.params]);

  log(chatData);

  const handleSendChat = () => {
    props.sendChat(
      token,
      route.params.sender !== parseInt(id)
        ? route.params.sender
        : route.params.recipient,
      chatData,
    );
  };

  return (
    <View style={styles.parent}>
      <View style={styles.parent2}>
        <View style={styles.parentTop}>
          <Image style={styles.imgTop} source={img} />
          <Text style={styles.top1}>Zulaikha</Text>
        </View>
      </View>
      <ScrollView
        ref={scrollView}
        onContentSizeChange={handleScrollToBottom}
        showsVerticalScrollIndicator={false}
        vertical={true}>
        <View style={styles.parent8}>
          <FlatList
            data={chatRoom}
            renderItem={({item}) =>
              item.sender === parseInt(id) ? (
                <View style={styles.box1}>
                  {log(typeof item.sender)}
                  <View style={styles.box2}>
                    <View style={styles.chatWrap}>
                      <Text style={styles.Textchat}>{item.message}</Text>
                    </View>
                    <Text style={styles.chat}>{`${new Date(item.createdAt)
                      .toLocaleDateString('en-US', timeFormat)
                      .slice(10)}`}</Text>
                  </View>
                  <View style={styles.imgWrap}>
                    <Image style={styles.img} source={img} />
                  </View>
                </View>
              ) : (
                <View style={styles.box1t}>
                  <View style={styles.imgWrapt}>
                    <Image style={styles.imgt} source={img} />
                  </View>
                  <View style={styles.box2t}>
                    <View style={styles.chatWrapt}>
                      <Text style={styles.Textchatt}>{item.message}</Text>
                    </View>
                    <Text style={styles.chatt}>{`${new Date(item.createdAt)
                      .toLocaleDateString('en-US', timeFormat)
                      .slice(10)}`}</Text>
                  </View>
                </View>
              )
            }
            keyExtractor={() => String(route.params.sender)}
          />
        </View>
      </ScrollView>

      <View style={styles.inputWrap}>
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={handleSendChat}>
            <Icon
              name="camera"
              size={24}
              color="#9F9F9F"
              style={{marginRight: 10}}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Type a message..."
            style={{width: '80%', fontSize: 20}}
            value={chatData.message}
            onPressOut={handleScrollToBottom}
            onSubmitEditing={handleSendChat}
            onChangeText={val =>
              setChatData({
                ...chatData,
                message: val,
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
  },
  parent8: {
    marginHorizontal: 20,
  },
  parentTop: {
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 10,
  },
  imgTop: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  parent2: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
  },
  title2: {
    paddingTop: 20,
    fontSize: 32,
    fontWeight: '600',
  },

  img: {
    borderRadius: 40,
    width: 40,
    height: 40,
  },
  // imgWrap: {
  //   backgroundColor: 'green',
  // },
  box1: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  box2: {
    paddingRight: 40,
    justifyContent: 'center',
    marginLeft: 60,
    marginRight: -20,
  },
  box3: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 5,
  },
  Textchat: {
    color: '#fff',
    fontWeight: '400',
    paddingHorizontal: 14,
  },
  chatWrap: {
    backgroundColor: '#7ECFC0',
    width: 200,
    paddingVertical: 15,
    borderRadius: 20,
  },
  chat: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#9F9F9F',
  },

  imgt: {
    borderRadius: 40,
    width: 40,
    height: 40,
  },
  // imgWrap: {
  //   backgroundColor: 'green',
  // },
  box1t: {
    marginTop: 10,
    flexDirection: 'row',
  },
  box2t: {
    paddingRight: 40,
    justifyContent: 'center',
    marginRight: 40,
    marginLeft: 20,
  },
  box3t: {
    justifyContent: 'center',
  },
  namet: {
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 5,
  },
  Textchatt: {
    color: '#000',
    fontWeight: '400',
    paddingHorizontal: 14,
  },
  chatWrapt: {
    backgroundColor: '#fff',
    width: 200,
    paddingVertical: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#7ECFC0',
  },
  chatt: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#9F9F9F',
  },
  top1: {
    fontWeight: 'bold',
    paddingVertical: 5,
    fontSize: 18,
  },
  top2: {
    color: '#9F9F9F',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWrap: {
    marginHorizontal: 20,
  },
});

const mapStateToProps = state => ({
  chat: state.chat,
});

const mapDispatchToProps = {sendChat, getChatRoom};

export default connect(mapStateToProps, mapDispatchToProps)(RoomChat);
