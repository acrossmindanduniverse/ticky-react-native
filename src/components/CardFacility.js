import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon2 from 'react-native-vector-icons/dist/FontAwesome5';
const CardFacility = ({name}) => {
  return (
    <View style={styles.burgerWrap}>
      <Icon2 style={styles.burger} name="hamburger" color="#FFF" size={18} />
      <Text style={styles.burgerText}>{name}</Text>
    </View>
  );
};

export default CardFacility;

const styles = StyleSheet.create({
  burgerText: {
    color: '#fff',
    fontWeight: 'bold',
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
});
