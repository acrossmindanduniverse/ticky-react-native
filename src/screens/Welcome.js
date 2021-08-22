import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import bg1 from '../images/bg1.jpg';

class Welcome extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.parent2}>
          <Image style={styles.img1} source={bg1} />
        </View>
        <View>
          <Text style={styles.h2}>Get Started</Text>
          <Text style={styles.h3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('daftar')}
          style={styles.btn}>
          <Text style={styles.btnText}>Create My Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('login')}
          style={styles.btn2}>
          <Text style={styles.btnText2}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  parent2: {
    alignItems: 'center',
    paddingTop: 60,
  },
  img1: {
    height: 250,
    width: 250,
    borderRadius: 250,
  },
  h2: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 30,
  },
  h3: {
    textAlign: 'center',
    fontSize: 14,
    paddingTop: 5,
    marginHorizontal: 45,
    lineHeight: 22,
  },
  btn: {
    backgroundColor: '#7ECFC0',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    marginTop: 70,
    marginHorizontal: 20,
  },
  btn2: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    marginTop: 16,
    marginHorizontal: 20,
    borderColor: '#7ECFC0',
    borderWidth: 1,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnText2: {
    color: '#7ECFC0',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Welcome;
