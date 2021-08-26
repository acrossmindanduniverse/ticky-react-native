/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable radix */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import {API_URL} from '@env';
import {io} from 'socket.io-client';
import {SearchBar} from 'react-native-elements';

import Icon from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import img from '../images/user.png';
import {connect, useDispatch, useSelector} from 'react-redux';
import {getChatList} from './../redux/actions/chat';
import {getUser, searchUser, searchDefault} from './../redux/actions/user';
import {TextInput} from 'react-native-gesture-handler';

const Chat = props => {
  const log = console.log;
  const dispatch = useDispatch();
  const {token} = props.auth;
  const {details, search, searchErr, pageInfo} = useSelector(
    state => state.user,
  );
  const socket = io(`${API_URL}`);
  const {chatList} = props.chat;
  const timeFormat = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const [page, setPage] = useState(1);
  const [searchData, setSearchData] = useState({
    search: '',
    sortBy: '',
    sort: '',
  });
  const [modal, setModal] = useState(false);

  const showModal = visible => {
    setModal(visible);
  };

  const handleDefault = () => {
    dispatch(searchDefault());
  };

  const handleSearchUserNext = () => {
    if (pageInfo.nextPage !== null) {
      setPage(page + 1);
    }
  };

  const handleSearchUser = () => {
    handleDefault();
    dispatch(
      searchUser(
        token,
        searchData.search,
        searchData.sortBy,
        searchData.sort,
        page,
      ),
    ).then(() => {
      setSearchData({
        ...searchData,
        search: '',
        sortBy: '',
        sort: '',
      });
    });
    setPage(1);
  };

  useEffect(() => {
    dispatch(
      searchUser(
        token,
        searchData.search,
        searchData.sortBy,
        searchData.sort,
        page,
      ),
    );
  }, [page]);

  useEffect(() => {
    dispatch(getUser(token));
  }, [token]);

  useEffect(() => {
    socket.on(details?.id, data => {
      props.getChatList(token);
      log(data, 'real time data');
    });
  }, []);

  useEffect(() => {
    props.getChatList(token);
  }, []);

  return (
    <View style={styles.parent}>
      <Modal
        visible={modal}
        transparent={true}
        onRequestClose={() => setModal(false)}>
        <TouchableOpacity
          onPress={() => setModal(false)}
          style={styles.modalParent}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <View style={styles.firstModalContent}>
                <TouchableOpacity
                  onPress={() => {
                    setSearchData({
                      ...searchData,
                      sortBy: 'fullname',
                    });
                    handleSearchUser();
                  }}
                  style={styles.primarySortBtn}>
                  <Text style={styles.primarySortText}>Name</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setSearchData({
                      ...searchData,
                      sortBy: 'email',
                    });
                    handleSearchUser();
                  }}
                  style={styles.primarySortBtn}>
                  <Text style={styles.primarySortText}>Email</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.secondModalContent}>
                <TouchableOpacity
                  onPress={() => {
                    setSearchData({
                      ...searchData,
                      sort: 'asc',
                    });
                    handleSearchUser();
                  }}
                  style={styles.primarySortBtn}>
                  <Text style={styles.primarySortText}>A-Z</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setSearchData({
                      ...searchData,
                      sort: 'desc',
                    });
                    handleSearchUser();
                  }}
                  style={styles.primarySortBtn}>
                  <Text style={styles.primarySortText}>Z-A</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
      <TouchableOpacity onPress={() => showModal(true)}>
        <Text style={styles.title1}>Filter</Text>
      </TouchableOpacity>
      <View style={styles.parent2}>
        <Text style={styles.title2}>Chat</Text>
        <View style={styles.seacrhWrap}>
          <TouchableOpacity onPress={handleSearchUser}>
            <Icon name="search" size={28} style={{marginHorizontal: 7}} />
          </TouchableOpacity>
          <TextInput
            styles={styles.seacrhWrap2}
            placeholder="Search People"
            onSubmitEditing={handleSearchUser}
            onChangeText={val =>
              setSearchData({
                ...searchData,
                search: val,
              })
            }
            value={searchData.search}
            // searchIcon={{size: 28}}
          />
        </View>
        <View>
          {searchErr === '' ? (
            <View style={{flexDirection: 'row'}}>
              <FlatList
                data={search}
                horizontal
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => {
                      item.id === details?.id
                        ? props.navigation.navigate('profile')
                        : props.navigation.navigate('roomChat', {user: item});
                      handleDefault();
                    }}>
                    <View style={styles.searchData}>
                      <Image style={styles.img} source={img} />
                      <View style={styles.userSearchData}>
                        <Text style={styles.email}>{item.email}</Text>
                        <Text>{item.fullname}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
              {search.length > 0 && (
                <TouchableOpacity
                  onPress={handleSearchUserNext}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 15,
                  }}>
                  <Entypo name="chevron-right" size={25} />
                </TouchableOpacity>
              )}
            </View>
          ) : (
            <View
              style={{
                marginVertical: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'red',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                }}>
                Zero user has been found
              </Text>
            </View>
          )}
        </View>
        <FlatList
          data={chatList}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('roomChat', {
                  user: {
                    id:
                      item.sender !== details?.id
                        ? item.sender
                        : item.recipient,
                    picture: item.user.picture,
                    name: item.user.fullname,
                  },
                })
              }
              style={styles.box1}>
              <View style={styles.imgWrap}>
                {item.user.picture === null ? (
                  <Image style={styles.img} source={img} />
                ) : (
                  <Image
                    style={styles.img}
                    source={{uri: `${API_URL}${item.user.picture}`}}
                  />
                )}
              </View>
              <View style={styles.box2}>
                <Text style={styles.name}>{item.user.fullname}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 200,
  },
  firstModalContent: {
    flexDirection: 'row',
    marginVertical: 7,
    paddingVertical: 4,
    borderBottomColor: '#F2F3F4',
    borderBottomWidth: 3,
  },
  secondModalContent: {
    flexDirection: 'row',
  },
  primarySortBtn: {
    marginVertical: 15,
    borderWidth: 2,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 7,
  },
  primarySortText: {
    fontSize: 18,
    fontFamily: 'Poppins-Light',
  },
  parent2: {
    flex: 1,
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
    alignItems: 'center',
    flexDirection: 'row',
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
    width: 60,
    height: 60,
    borderRadius: 15,
    // marginRight: 30,
  },
  searchData: {
    marginHorizontal: 15,
    flexDirection: 'row',
    marginVertical: 10,
  },
  userSearchData: {
    marginHorizontal: 5,
  },
  img: {
    width: 60,
    height: 60,
  },
  box1: {
    marginTop: 30,
    flexDirection: 'row',
  },
  box2: {
    flex: 1,
    marginRight: 40,
    marginLeft: 20,
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
  email: {
    fontSize: 18,
    marginBottom: 6,
    fontWeight: '600',
  },
  chat: {
    color: '#6B6B6B',
    fontWeight: '400',
  },
});

const mapStateToProps = state => ({
  chat: state.chat,
  auth: state.auth,
});

const mapDispatchToProps = {getChatList};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
