import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import img from '../images/profile.png';

import {Input} from 'react-native-elements';

export default class EditProfile extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.parent2}>
          <Text style={styles.title2}>Edit Profile</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Save</Text>
          </TouchableOpacity>
        </View>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          <View style={styles.parent3}>
            <View style={styles.imgWrap2}>
              <View style={styles.imgWrap}>
                <Image style={styles.img} source={img} />
              </View>
              <TouchableOpacity style={styles.edit1}>
                <Text style={styles.h19}>Edit Image</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.h1}>Contact</Text>
            <View>
              <Text style={styles.h2}>Email</Text>
              <Input
                style={styles.input}
                placeholderTextColor="#000"
                placeholder="flightbooking@ankasa.com"
                inputContainerStyle={styles.input}
                keyboardType="email-address"
              />
              <Text style={styles.t2}>Phone Number</Text>
              <Input
                style={styles.input}
                placeholderTextColor="#000"
                placeholder="+6281987654321"
                inputContainerStyle={styles.input}
                keyboardType="phone-pad"
              />
            </View>
          </View>
          <View style={styles.parent3}>
            <Text style={styles.h1}>Biodata</Text>
            <View>
              <Text style={styles.h2}>Username</Text>
              <Input
                style={styles.input}
                placeholderTextColor="#000"
                placeholder="Mike Kowalski"
                inputContainerStyle={styles.input}
              />
              <Text style={styles.t2}>City</Text>
              <Input
                style={styles.input}
                placeholderTextColor="#000"
                placeholder="Medan"
                inputContainerStyle={styles.input}
              />
              <Text style={styles.t2}>Address</Text>
              <Input
                style={styles.input}
                placeholderTextColor="#000"
                placeholder="Medan, Inonesia"
                inputContainerStyle={styles.input}
              />
              <Text style={styles.t2}>Post Code</Text>
              <Input
                style={styles.input}
                placeholderTextColor="#000"
                placeholder="55555"
                keyboardType="number-pad"
                inputContainerStyle={styles.input}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  parent2: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  parent3: {
    marginHorizontal: 20,
  },

  h1: {
    fontSize: 16,
    fontWeight: '600',
    // paddingTop: 10,
  },
  h19: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#5dcab6',
    // paddingTop: 10,
  },
  h2: {
    color: '#9B96AB',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  t2: {
    color: '#9B96AB',
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  title2: {
    paddingTop: 90,
    fontSize: 32,
    fontWeight: '600',
    paddingBottom: 20,
  },

  input: {
    borderColor: '#7ECFC0',
  },
  btn: {
    marginTop: 90,
    paddingHorizontal: 35,
    borderRadius: 10,
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#7ECFC0',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  imgWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 110,
    height: 110,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#7ECFC0',
    marginTop: 10,
  },
  imgWrap2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  edit1: {
    paddingVertical: 10,
    paddingBottom: 20,
  },
});
