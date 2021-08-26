/* eslint-disable radix */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef, useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {getChatRoom, deleteChat, getChatList} from '../redux/actions/chat';
import {connect, useDispatch} from 'react-redux';
import {io} from 'socket.io-client';
import {API_URL} from '@env';
import {TextInput} from 'react-native-gesture-handler';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {sendChat} from './../redux/actions/chat';
import {getUser} from './../redux/actions/user';
import defaultImage from '../images/user.png';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
const RoomChat = props => {
  const log = console.log;
  const dispatch = useDispatch();
  const socket = io(`${API_URL}`);
  const {token} = props.auth;
  const {details} = props.user;

  const [modal, setModal] = useState(false);
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [saveId, setSaveId] = useState();

  const {user} = props.route.params;
  const {chatRoom} = props.chat;
  const scrollView = useRef();
  const [chatData, setChatData] = useState({
    message: '',
    attachment: '',
  });
  const timeFormat = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const handleLaunchGallery = () => {
    launchImageLibrary({}, event => {
      if (!event.didCancel) {
        setChatData({
          ...chatData,
          attachment: event.assets[0],
        });
      }

      setModal(false);
    });
  };

  const handleLaunchCamera = () => {
    launchCamera({}, event => {
      if (!event.didCancel) {
        setChatData({
          ...chatData,
          attachment: event.assets[0],
        });
      }

      setModal(false);
    });
  };

  const showModal = visible => {
    setModal(visible);
  };

  const handleDeleteToggle = (visible, id) => {
    setDeleteToggle(visible);
    setSaveId(id);
  };

  const handleDeleteChat = item => {
    const form = {
      id: item.sender !== details?.id ? item.sender : item.recipient,
      chatId: item.id,
    };
    props.deleteChat(token, form.id, form.chatId);
    setDeleteToggle(false);
    // setTimeout(() => {
    //   props.getChatRoom(token, [user.id || details.id]);
    // }, 200);
  };

  // log(saveId, 'test route 12345');

  const handleScrollToBottom = () => {
    scrollView.current.scrollToEnd({animated: true});
  };

  useEffect(() => {
    props.getUser(token);
  }, []);

  useEffect(() => {
    if (details?.id) {
      socket.on(details.id, data => {
        props.getChatRoom(token, data.sender);
        log(data, 'realtime');
      });
    }
  }, []);

  useEffect(() => {
    props.getChatRoom(token, [user.id || details.id]);
  }, []);

  const handleSendChat = () => {
    if (chatData.message !== '') {
      props.sendChat(token, user.id, chatData).then(() => {
        props.getChatRoom(token, user.id);
        setChatData({
          ...chatData,
          message: '',
          attachment: '',
        });
      });
      dispatch(getChatList(token)).catch(err => {
        log(err);
      });
    }
  };

  return (
    <View style={styles.parent}>
      <Modal
        visible={modal}
        onRequestClose={() => setModal(true)}
        transparent={true}
        animationType={'fade'}>
        <TouchableOpacity
          onPressOut={() => setModal(false)}
          style={styles.modalParent}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <View style={styles.imageLauncher}>
                <TouchableOpacity
                  onPress={handleLaunchGallery}
                  style={styles.cancelPayment}>
                  <Text style={styles.imageLaunchText}>Galerry</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleLaunchCamera}
                  style={styles.saveItem}>
                  <Text style={styles.imageLaunchText}>Camera</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
      <View style={styles.parent2}>
        <View style={styles.parentTop}>
          {user.picture === null ? (
            <Image style={styles.imgTop} source={defaultImage} />
          ) : (
            <Image
              style={styles.imgTop}
              source={{uri: `${API_URL}${user.picture}`}}
            />
          )}
          <Text style={styles.top1}>{user.fullname}</Text>
        </View>
      </View>
      <View style={styles.parent8}>
        <FlatList
          ref={scrollView}
          onContentSizeChange={handleScrollToBottom}
          data={chatRoom}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) =>
            item.sender === details?.id ? (
              <View style={styles.box1}>
                {log(typeof item.sender)}
                <View style={styles.box2}>
                  {item.attachment !== null && (
                    <View style={{alignItems: 'flex-end', marginBottom: 5}}>
                      <Image
                        style={{width: 60, height: 60, backgroundColor: 'grey'}}
                        source={{uri: `${API_URL}${item.attachment}`}}
                      />
                    </View>
                  )}
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {deleteToggle && item.id === saveId?.id && (
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                          onPress={() => setDeleteToggle(false)}
                          style={{marginRight: 20}}>
                          <AntDesign name="close" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => handleDeleteChat(item)}>
                          <Icon
                            name="trash-o"
                            size={25}
                            style={{marginRight: 20}}
                          />
                        </TouchableOpacity>
                      </View>
                    )}
                    <TouchableOpacity
                      onLongPress={() => handleDeleteToggle(true, item)}
                      style={styles.chatWrap}>
                      <Text style={styles.Textchat}>{item.message}</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.chat}>{`${new Date(item.createdAt)
                    .toLocaleDateString('en-US', timeFormat)
                    .slice(10)}`}</Text>
                </View>
                <View style={styles.imgWrap}>
                  {details.picture === null ? (
                    <Image style={styles.imgTop} source={defaultImage} />
                  ) : (
                    <Image
                      style={styles.imgTop}
                      source={{uri: `${API_URL}${details.picture}`}}
                    />
                  )}
                </View>
              </View>
            ) : (
              <View style={styles.box1t}>
                <View style={styles.imgWrapt}>
                  {user.picture === null ? (
                    <Image style={styles.imgTop} source={defaultImage} />
                  ) : (
                    <Image
                      style={styles.imgTop}
                      source={{uri: `${API_URL}${user.picture}`}}
                    />
                  )}
                </View>
                <View style={styles.box2t}>
                  {item.attachment !== null && (
                    <View style={{marginBottom: 5}}>
                      <Image
                        style={{width: 60, height: 60, backgroundColor: 'grey'}}
                        source={{uri: `${API_URL}${item.attachment}`}}
                      />
                    </View>
                  )}
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
        />
        <View style={styles.inputWrap}>
          {chatData.attachment !== '' && (
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <Text style={{fontFamily: 'Poppins-Light', fontSize: 25}}>
                File
              </Text>
              <TouchableOpacity
                onPress={() =>
                  setChatData({
                    ...chatData,
                    attachment: '',
                  })
                }>
                <AntDesign style={{marginLeft: 10}} size={25} name="close" />
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.inputContainer}>
            <TouchableOpacity onPress={() => showModal(true)}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
  },
  modalParent: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    backgroundColor: '#000000a0',
    height: '100%',
  },
  modalContent: {
    marginHorizontal: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginTop: 200,
  },
  closeIcon: {
    justifyContent: 'center',
    marginTop: 15,
    alignItems: 'flex-end',
    marginRight: 18,
  },
  imageLauncher: {
    justifyContent: 'center',
    paddingVertical: 70,
    alignItems: 'center',
  },
  imageLaunchText: {
    fontSize: 18,
    marginVertical: 10,
    color: '#000',
  },
  parent8: {
    marginHorizontal: 20,
    flex: 1,
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
    marginVertical: 10,
  },
});

const mapStateToProps = state => ({
  chat: state.chat,
  user: state.user,
  auth: state.auth,
});

const mapDispatchToProps = {getChatRoom, sendChat, getUser, deleteChat};

export default connect(mapStateToProps, mapDispatchToProps)(RoomChat);
