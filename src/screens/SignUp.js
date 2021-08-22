import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
// import img1 from '../images/ovo1.png';
import {Input, CheckBox} from 'react-native-elements';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: '',
    };
  }
  render() {
    return (
      <View style={styles.parent}>
        {/* <Image style={styles.img1} source={img1} /> */}
        <View>
          <Text style={styles.h3}>Continue as Guest</Text>
        </View>
        <View>
          <Text style={styles.h4}>Register</Text>
          <View style={styles.wrap1}>
            <Input style={styles.input} placeholder="Full Name" />
            <Input
              style={styles.input}
              keyboardType="email-address"
              placeholder="Email"
            />
            <Input
              style={styles.input}
              secureTextEntry={true}
              placeholder="Password"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.boxWrap}>
          <CheckBox
            title="Accept terms and condition"
            checked={this.state.checked}
            checkedColor="#7ECFC0"
            onPress={() => this.setState({checked: !this.state.checked})}
          />
        </View>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Already have an account?</Text>
        </View>
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
    backgroundColor: '#fff',
  },
  h1: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  img1: {
    width: '100%',
    height: 460,
  },
  h2: {
    color: '#000',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 30,
  },
  h3: {
    color: '#7ECFC0',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 30,
    paddingLeft: 200,
  },
  btn: {
    backgroundColor: '#7ECFC0',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  h4: {
    paddingTop: 40,
    paddingLeft: 28,
    fontSize: 32,
    fontWeight: 'bold',
  },
  wrap1: {
    marginHorizontal: 16,
    paddingTop: 27,
  },
  input: {
    paddingHorizontal: 14,
  },
  boxWrap: {
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  bottomText: {
    fontSize: 14,
    textAlign: 'center',
    borderTopWidth: 1,
    marginHorizontal: 50,
    borderColor: '#D8D8D8',
    paddingVertical: 15,
  },
  btn2: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    // marginTop: 16,
    marginHorizontal: 20,
    borderColor: '#7ECFC0',
    borderWidth: 1,
  },
  btnText2: {
    color: '#7ECFC0',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
