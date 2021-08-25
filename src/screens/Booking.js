import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

import BookingHeader from '../components/BookingHeader';
import BottomHeader from '../components/BottomHeader';
import {getTransactions} from '../redux/actions/trx';
import vector from '../images/vector.png';
import {connect} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

const Booking = props => {
  const log = console.log;
  const {transactions} = props.trx;
  const timeFormat = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJFJwY0E2NHlqeW1EbE11SXdZYjZzSWVoQVdzWWxkbmpXTDZnNnhiaEZSTWRCOU5HNHVwam51IiwiaWF0IjoxNjI5ODAxMjg1LCJleHAiOjE2Mjk4ODc2ODV9.1YiBd1Ye8YsLQ1ia4LY2LZCWV3Fj6Sft3iAvzqr7P04';

  useEffect(() => {
    props.getTransactions(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.parent}>
      <BookingHeader navigation={props.navigation} />
      <View style={{height: '85%'}}>
        <FlatList
          data={transactions}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('bookingDetail', item.id)
              }
              style={styles.shadowbox}>
              <Text>{`${new Date()
                .toLocaleDateString('ind', timeFormat)
                .slice(0, 9)}, ${item.ticket.departure_time}`}</Text>
              <View style={styles.wrap1}>
                {console.log(item.id, 'test test')}
                <Text style={styles.h1}>{`${item.ticket.code_departure}`}</Text>
                <View style={styles.imgWrap}>
                  <Image source={vector} />
                </View>
                <Text
                  style={styles.h1}>{`${item.ticket.code_destination}`}</Text>
              </View>
              <View style={styles.wrap2}>
                <Text style={styles.h2}>
                  {`${item.ticket.airline.name}`}, {`${item.ticket.seat}`}
                </Text>
              </View>
              <View style={styles.wrap3}>
                <Text style={styles.h3}>Status</Text>
                {!item.isPayment ? (
                  <View style={styles.btn1}>
                    <Text style={styles.btn1h}>Waiting for payment</Text>
                  </View>
                ) : (
                  <View style={styles.btn2}>
                    <Text style={styles.btn1h}>Eticket Issued</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <BottomHeader navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  shadowbox: {
    marginHorizontal: 25,
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 12,
    height: 180,
    paddingHorizontal: 20,
    // alignItems: 'center',
    paddingVertical: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  shadowbox2: {
    marginHorizontal: 25,
    backgroundColor: '#fff',
    marginTop: 30,
    borderRadius: 12,
    height: 180,
    paddingHorizontal: 20,
    // alignItems: 'center',
    paddingVertical: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  wrap1: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  wrap2: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: '#E5E5E5',
  },
  wrap3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  imgWrap: {
    paddingHorizontal: 25,
  },
  h1: {
    fontSize: 20,
    fontWeight: '600',
  },
  h2: {
    color: '#979797',
  },
  h3: {
    color: '#7A7A7A',
    fontWeight: '600',
  },
  btn1: {
    backgroundColor: '#FF7F23',
    height: 35,
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  btn2: {
    backgroundColor: '#4FCF4D',
    height: 35,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  btn1h: {
    color: 'white',
    fontWeight: '600',
  },
});

const mapStateToProps = state => ({
  trx: state.trx,
});

const mapDispatchToProps = {getTransactions};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
