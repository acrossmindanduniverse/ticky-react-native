import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
// import img1 from '../images/ovo1.png';
import {Input, CheckBox} from 'react-native-elements';

import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {authRegister} from '../redux/actions/auth';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const formData = {
    email: email,
    password: password,
    fullname: fullname,
  };

  console.log(checked);

  const onSubmit = () => {
    if (formData.fullname.length > 0) {
      if (formData.email.length > 0) {
        if (formData.password.length >= 8) {
          if (checked !== false) {
            dispatch(authRegister(formData, navigation));
          } else {
            ToastAndroid.showWithGravity(
              'Accept terms and condition',
              ToastAndroid.LONG,
              ToastAndroid.TOP,
            );
          }
        } else {
          ToastAndroid.showWithGravity(
            'Password Must be length more than 8 Characters',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
          );
        }
      } else {
        ToastAndroid.showWithGravity(
          'Email cannot empty',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
      }
    } else {
      ToastAndroid.showWithGravity(
        'Name cannot empty',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    }
  };

  return (
    <View style={styles.parent}>
      {/* <Image style={styles.img1} source={img1} /> */}
      <View>
        <Text style={styles.h3}>Continue as Guest</Text>
      </View>
      <View>
        <Text style={styles.h4}>Register</Text>
        <View style={styles.wrap1}>
          <Input
            style={styles.input}
            placeholder="Full Name"
            value={fullname}
            onChangeText={value => setFullname(value)}
          />
          <Input
            style={styles.input}
            keyboardType="email-address"
            placeholder="Email"
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <Input
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
            value={password}
            onChangeText={value => setPassword(value)}
          />
        </View>
      </View>
      <TouchableOpacity onPress={onSubmit} style={styles.btn}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.boxWrap}>
        <CheckBox
          title="Accept terms and condition"
          checked={checked}
          checkedColor="#7ECFC0"
          onPress={() => setChecked(!checked)}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bottomText}>Already have an account?</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('login')}
        style={styles.btn2}>
        <Text style={styles.btnText2}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

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
