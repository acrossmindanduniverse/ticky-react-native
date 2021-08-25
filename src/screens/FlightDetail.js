import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';

import vector from '../images/vector.png';
import garuda from '../images/garuda.png';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import CardFacility from '../components/CardFacility';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {createTransaction, getTransactions} from './../redux/actions/trx';
import {ActivityIndicator} from 'react-native';

const FlightDetail = ({route, createTransaction: transaction, navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.auth);
  // const {transactionToggle} = useSelector(state => state.trx);

  const transactionData = {
    total_amount: 1,
    id_ticket: route.params.id,
  };

  const [modal, setModal] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const showModal = visible => {
    setModal(visible);
  };

  const handleAddToBookingList = () => {
    setModal(false);
    setSpinner(true);
  };

  useEffect(() => {
    if (spinner) {
      setTimeout(() => {
        dispatch(createTransaction(token, transactionData)).then(() => {
          dispatch(getTransactions(token));
        });
        setSpinner(false);
        navigation.navigate('booking');
      }, 300);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spinner]);

  return (
    <View style={styles.parent}>
      {spinner && (
        <Modal transparent={true} style={styles.loadingContainer}>
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
                  onPress={handleAddToBookingList}
                  style={styles.cancelPayment}>
                  <Text style={styles.paymentText}>Add to booking list</Text>
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
      <View style={styles.nav} />
      <View style={styles.shadowbox}>
        <View style={styles.rowbox}>
          <View>
            <Text style={styles.city}>{route.params.code_departure}</Text>
            <Text style={styles.h1}>{route.params.departure_time}</Text>
          </View>
          <View style={styles.box1}>
            <Image source={vector} />
          </View>
          <View>
            <Text style={styles.city}>{route.params.code_destination}</Text>
            <Text style={styles.h2}>{route.params.arrival_time}</Text>
          </View>
        </View>
        <View style={styles.wrap1}>
          <Image
            style={styles.img}
            source={{
              uri: `http://localhost:8080${route.params.airline.picture}`,
            }}
          />
          <View style={styles.wrap2}>
            <View style={styles.star}>
              <Icon
                style={styles.starIcon}
                name="star"
                color="#FF7F23"
                size={18}
              />
              <Icon
                style={styles.starIcon}
                name="star"
                color="#FF7F23"
                size={18}
              />
              <Icon
                style={styles.starIcon}
                name="star"
                color="#FF7F23"
                size={18}
              />
              <Icon
                style={styles.starIcon}
                name="star"
                color="#FF7F23"
                size={18}
              />
            </View>
            <Text style={styles.h5}>120k review</Text>
          </View>
        </View>
        <View style={styles.wrap3}>
          <View>
            <Text style={styles.code}>Code</Text>
            <Text>{route.params.seat}</Text>
          </View>
          <View>
            <Text style={styles.code}>Class</Text>
            <Text>{route.params.class}</Text>
          </View>
          <View>
            <Text style={styles.code}>Terminal</Text>
            <Text>{route.params.terminal}</Text>
          </View>
          <View>
            <Text style={styles.code}>Gate</Text>
            <Text>{route.params.gate}</Text>
          </View>
        </View>
        <View style={styles.wrap9}>
          <View style={styles.childWrap}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>2</Text>
            </View>
            <View style={styles.box9}>
              <Text>Child</Text>
            </View>
          </View>
          <View style={styles.childWrap}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>2</Text>
            </View>
            <View style={styles.box9}>
              <Text>Adults</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.facilwrap}>
        <Text style={styles.facil}>Facilities</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {route.params.item_facilities.map(res => {
            return <CardFacility name={res.facility.name} />;
          })}
        </ScrollView>
        <View style={styles.totalWrap}>
          <Text>Total you’ll pay</Text>
          <Text style={styles.total}>$ {route.params.price}</Text>
        </View>
        <TouchableOpacity onPress={() => showModal(true)} style={styles.btn19}>
          <Text style={styles.h19}>BOOK FLIGHT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FlightDetail;

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
  loadingContainer: {
    zIndex: 1,
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
  nav: {
    backgroundColor: '#7ECFC0',
    height: 180,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    zIndex: 1,
  },
  shadowbox: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
    marginTop: -50,
    borderRadius: 12,
    height: 310,
    paddingHorizontal: 20,
    // alignItems: 'center',
    paddingVertical: 30,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  rowbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  city: {
    fontSize: 20,
    fontWeight: '600',
  },
  h2: {
    textAlign: 'right',
    color: '#979797',
    fontSize: 12,
  },
  h1: {
    color: '#979797',
    fontSize: 12,
  },
  star: {
    flexDirection: 'row',
  },
  starIcon: {
    paddingHorizontal: 2,
  },
  wrap1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  h5: {
    textAlign: 'center',
  },
  img: {
    height: 40,
    width: 70,
  },
  wrap3: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: '#E5E5E5',
  },
  code: {
    fontSize: 14,
    fontWeight: '400',
    color: '#A5A5A5',
  },
  childWrap: {
    flexDirection: 'row',
  },
  circle: {
    backgroundColor: '#D1FFED',
    width: 35,
    height: 35,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    color: '#7ECFC0',
    fontWeight: '700',
    fontSize: 18,
  },
  box9: {
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  wrap9: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
  },
  burgerWrap: {
    backgroundColor: '#6DDA6B',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    width: 130,
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
    // marginHorizontal: 20,
    marginRight: 10,
  },
  burgerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  facil: {
    paddingTop: 25,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  facilwrap: {
    marginHorizontal: 20,
    flex: 1,
  },
  totalWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  total: {
    fontSize: 20,
    color: '#2395FF',
    fontWeight: '600',
  },
  btn19: {
    backgroundColor: '#7ECFC0',
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    height: 60,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  h19: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
});
