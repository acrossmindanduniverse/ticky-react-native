import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Icon2 from 'react-native-vector-icons/dist/Entypo';
import Icon from 'react-native-vector-icons/dist/Fontisto';
import {useSelector} from 'react-redux';
import CardTicket from '../components/CardTicket';

const SearchResult = ({route, navigation}) => {
  const {data} = useSelector(state => state.trx);
  return (
    <View style={styles.parent}>
      <View style={styles.nav}>
        <View style={styles.wrap1}>
          <Text style={styles.h1}> Monday, 20 July ‘20 </Text>
        </View>
        <View style={styles.wrap2}>
          <View>
            <Text style={styles.txt1}>From</Text>
            <Text style={styles.txt2}>{route.params.departure}</Text>
          </View>
          <View style={styles.wrap3}>
            <Icon name="arrow-swap" color="#fff" size={25} />
          </View>
          <View>
            <Text style={styles.text1}>To</Text>
            <Text style={styles.text2}>{route.params.destination}</Text>
          </View>
        </View>
      </View>
      <View style={styles.wrap4}>
        <View>
          <Text style={styles.text4}>Passengger</Text>
          <Text style={styles.text5}>2 Child 4 Adults</Text>
        </View>
        <View>
          <Text style={styles.text4}>Class</Text>
          <Text style={styles.text5}>{route.params.class}</Text>
        </View>
      </View>

      <View style={styles.wrap5}>
        <View>
          <Text style={styles.text6}>{data.length} flight found</Text>
        </View>
        <View style={styles.wrap6}>
          <Text style={styles.text7}>Filter</Text>
          <Icon2 name="select-arrows" color="#000" size={25} />
        </View>
      </View>

      <FlatList
        style={styles.scroll}
        data={data}
        vertical
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <CardTicket
            departure={item.code_departure}
            depTime={item.departure_time}
            destination={item.code_destination}
            desTime={item.arrival_time}
            price={item.price}
            img={{uri: `http://localhost:8080${item.airline.picture}`}}
            onPress={() => navigation.navigate('detail', item)}
          />
        )}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
  },
  nav: {
    backgroundColor: '#7ECFC0',
    height: 200,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    zIndex: 1,
  },
  wrap1: {
    marginLeft: 190,
    marginTop: 40,
    backgroundColor: 'white',
    opacity: 0.3,
    width: 150,
    borderRadius: 6,
  },
  h1: {
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 10,
    textAlign: 'center',
  },
  h2: {
    fontWeight: '500',
    fontSize: 24,
  },
  wrap2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
  },
  txt1: {
    color: 'white',
  },
  txt2: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  txt3: {
    color: 'white',
  },
  text1: {
    textAlign: 'right',
    color: 'white',
  },
  text2: {
    textAlign: 'right',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text3: {
    textAlign: 'right',
    color: 'white',
  },
  wrap3: {
    justifyContent: 'center',
  },
  wrap4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 40,
    backgroundColor: '#F8F8F8',
    marginTop: -30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  text4: {
    fontSize: 12,
    color: '#979797',
    paddingBottom: 5,
  },
  wrap5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  wrap6: {
    flexDirection: 'row',
  },
  text6: {
    fontWeight: '500',
    color: '#979797',
  },
  text7: {
    fontWeight: '500',
  },
  img: {
    width: 60,
    height: 34,
  },
  boxrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 22,
    borderWidth: 1,
    borderColor: '#979797',
    borderRadius: 7.5,
  },
  box1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  jam: {
    color: '#6B6B6B',
  },
  jam2: {
    color: '#6B6B6B',
  },
  dollar: {
    color: '#2395FF',
    fontWeight: 'bold',
  },
  boxGaruda: {
    justifyContent: 'center',
    paddingRight: 20,
  },
  boxCenter: {
    paddingHorizontal: 45,
    paddingTop: 10,
  },
  scroll: {
    marginTop: 30,
  },
  wrapper2: {
    marginBottom: 10,
  },
});
