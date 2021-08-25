import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';

import garuda from '../images/garuda2.png';
import vector from '../images/vector.png';
import qrcode from '../images/qrcode.png';
import {connect, useSelector, useDispatch} from 'react-redux';
import {
  getDetailTransaction,
  proceedToPayment,
  getTransactions,
} from './../redux/actions/trx';
import {FlatList} from 'react-native-gesture-handler';
import {API_URL} from '@env';

const BookingDetail = props => {
  const log = console.log;
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.auth);
  const {detailTransaction} = props.trx;
  const route = props.route;
  const [modal, setModal] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const timeFormat = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const showModal = visible => {
    setModal(visible);
  };

  log(detailTransaction, 'booking detail');

  const handleProceedToPayment = () => {
    setSpinner(true);
    setModal(false);
  };

  useEffect(() => {
    if (spinner) {
      setTimeout(() => {
        dispatch(proceedToPayment(token, route.params))
          .then(() => {
            dispatch(getTransactions(token));
            props.getDetailTransaction(token, route.params);
          })
          .catch(err => {
            console.log(err);
          });
        setSpinner(false);
      }, 300);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spinner, detailTransaction]);

  log(props.trx, 'params');
  useEffect(() => {
    props.getDetailTransaction(token, route.params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, route.params]);

  return (
    <View style={styles.parent}>
      {spinner && (
        <Modal transparent={true}>
          <View style={styles.modalParent}>
            <ActivityIndicator
              style={{marginTop: 300}}
              size="large"
              color="#fff"
            />
          </View>
        </Modal>
      )}
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
              <View style={styles.paymentContainer}>
                <TouchableOpacity
                  onPress={handleProceedToPayment}
                  style={styles.cancelPayment}>
                  <Text style={styles.paymentText}>Pay now</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setModal(false)}
                  style={styles.saveItem}>
                  <Text style={styles.paymentText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
      <View>
        <Text style={styles.title}>Booking Pass</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.shadowbox}>
          <View style={styles.garudaWrap}>
            {detailTransaction.ticket?.airline.picture === null ? (
              <Image style={styles.garuda} source={garuda} />
            ) : (
              <Image
                style={styles.garuda}
                source={{
                  uri: `${API_URL}${detailTransaction.ticket?.airline.picture}`,
                }}
              />
            )}
          </View>
          <View style={styles.wrap1}>
            <Text
              style={
                styles.h1
              }>{`${detailTransaction.ticket?.code_departure}`}</Text>
            <View style={styles.imgWrap}>
              <Image source={vector} />
            </View>
            <Text
              style={
                styles.h1
              }>{`${detailTransaction.ticket?.code_destination}`}</Text>
          </View>
          <View style={styles.wrap1}>
            {!detailTransaction.isPayment ? (
              <TouchableOpacity
                onPress={() => showModal(true)}
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
              <Text
                style={styles.h6}>{`${detailTransaction.ticket?.seat}`}</Text>
            </View>
            <View>
              <Text style={styles.h3}>Class</Text>
              <Text
                style={styles.h6}>{`${detailTransaction.ticket?.class}`}</Text>
            </View>
            <View>
              <Text style={styles.h3}>Terminal</Text>
              <Text
                style={
                  styles.h6
                }>{`${detailTransaction.ticket?.terminal}`}</Text>
            </View>
            <View>
              <Text style={styles.h3}>Gate</Text>
              <Text
                style={styles.h6}>{`${detailTransaction.ticket?.gate}`}</Text>
            </View>
          </View>
          <View style={styles.wrapper1}>
            <Text style={styles.h3}>Departure</Text>
            <Text style={styles.h6}>{`${new Date()
              .toLocaleDateString('ind', timeFormat)
              .slice(0, 9)}, ${
              detailTransaction.ticket?.departure_time
            }`}</Text>
          </View>
          <View style={styles.qrWrap}>
            <Image source={qrcode} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#7ECFC0',
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
  paymentContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 70,
    alignItems: 'center',
  },
  paymentText: {
    fontSize: 18,
    color: '#000',
  },
  saveItem: {
    width: '40%',
    borderRadius: 15,
    padding: 5,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FF7F23',
    borderWidth: 2,
  },
  cancelPayment: {
    width: '40%',
    borderRadius: 15,
    padding: 5,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#4FCF4D',
    borderWidth: 2,
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
