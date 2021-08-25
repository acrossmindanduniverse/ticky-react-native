import React, {useEffect} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

import garuda from '../images/garuda2.png';
import vector from '../images/vector.png';
import qrcode from '../images/qrcode.png';
import {connect} from 'react-redux';
import {getDetailTransaction} from './../redux/actions/trx';
import {FlatList} from 'react-native-gesture-handler';
const APP_URL_LOCAL = 'http://192.168.244.1:8080';

const BookingDetail = props => {
  const log = console.log;
  const {detailTransaction} = props.trx;
  const route = props.route;
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJFJwY0E2NHlqeW1EbE11SXdZYjZzSWVoQVdzWWxkbmpXTDZnNnhiaEZSTWRCOU5HNHVwam51IiwiaWF0IjoxNjI5ODAxMjg1LCJleHAiOjE2Mjk4ODc2ODV9.1YiBd1Ye8YsLQ1ia4LY2LZCWV3Fj6Sft3iAvzqr7P04';
  const timeFormat = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  log(props.trx, 'params');
  useEffect(() => {
    props.getDetailTransaction(token, route.params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.parent}>
      <View>
        <Text style={styles.title}>Booking Pass</Text>
      </View>
      <FlatList
        data={detailTransaction}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.shadowbox}>
            <View style={styles.garudaWrap}>
              {item.ticket.airline.picture === null ? (
                <Image style={styles.garuda} source={garuda} />
              ) : (
                <Image
                  style={styles.garuda}
                  source={{
                    uri: `${APP_URL_LOCAL}${item.ticket.airline.picture}`,
                  }}
                />
              )}
            </View>
            <View style={styles.wrap1}>
              <Text style={styles.h1}>{`${item.ticket.code_departure}`}</Text>
              <View style={styles.imgWrap}>
                <Image source={vector} />
              </View>
              <Text style={styles.h1}>{`${item.ticket.code_destination}`}</Text>
            </View>
            <View style={styles.wrap1}>
              {!item.isPayment ? (
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('detail', item.id)}
                  style={styles.btn1}>
                  <Text style={styles.btn1h}>Waiting for payment</Text>
                </TouchableOpacity>
              ) : (
                <View style={styles.btn2}>
                  <Text style={styles.btn1h}>Eticket Issued</Text>
                </View>
              )}
            </View>
            <View style={styles.row1}>
              <View>
                <Text style={styles.h3}>Status</Text>
                <Text style={styles.h6}>{`${item.ticket.seat}`}</Text>
              </View>
              <View>
                <Text style={styles.h3}>Class</Text>
                <Text style={styles.h6}>{`${item.ticket.class}`}</Text>
              </View>
              <View>
                <Text style={styles.h3}>Terminal</Text>
                <Text style={styles.h6}>{`${item.ticket.terminal}`}</Text>
              </View>
              <View>
                <Text style={styles.h3}>Gate</Text>
                <Text style={styles.h6}>{`${item.ticket.gate}`}</Text>
              </View>
            </View>
            <View style={styles.wrapper1}>
              <Text style={styles.h3}>Departure</Text>
              <Text style={styles.h6}>{`${new Date()
                .toLocaleDateString('ind', timeFormat)
                .slice(0, 9)}, ${item.ticket.departure_time}`}</Text>
            </View>
            <View style={styles.qrWrap}>
              <Image source={qrcode} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#7ECFC0',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 80,
    paddingTop: 30,
  },
  shadowbox: {
    marginHorizontal: 25,
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 12,
    height: 550,
    paddingHorizontal: 30,
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
    justifyContent: 'center',
  },
  wrap2: {
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderColor: '#E5E5E5',
  },
  wrapper1: {
    paddingTop: 20,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  issue: {
    backgroundColor: '#4FCF4D',
    marginHorizontal: 60,
    borderRadius: 6,
    marginTop: 10,
  },
  imgWrap: {
    paddingHorizontal: 25,
  },
  h1: {
    fontSize: 20,
    fontWeight: '600',
  },
  h2: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
  },
  h3: {
    color: '#7A7A7A',
    fontWeight: '400',
    paddingBottom: 5,
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
  garudaWrap: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  garuda: {
    resizeMode: 'cover',
  },
  qrWrap: {
    alignItems: 'center',
    marginTop: 10,
  },
});

const mapStateToProps = state => ({
  trx: state.trx,
  auth: state.auth,
});

const mapDispatchToProps = {getDetailTransaction};

export default connect(mapStateToProps, mapDispatchToProps)(BookingDetail);
