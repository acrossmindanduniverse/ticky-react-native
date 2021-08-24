import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
// import img1 from '../images/ovo1.png';
import {Input} from 'react-native-elements';

import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/dist/AntDesign';
import Icon3 from 'react-native-vector-icons/dist/FontAwesome5';

import {authLogin} from '../redux/actions/auth';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const formData = {
    email: email,
    password: password,
  };

  const onSubmit = () => {
    if (formData.email.length > 0) {
      if (formData.password.length >= 8) {
        dispatch(authLogin(formData, navigation));
      } else {
        ToastAndroid.showWithGravity(
          'Password Must be length more than 8 Characters',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
      }
    } else {
      ToastAndroid.showWithGravity(
        'email cannot empty',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    }
  };

  return (
    <View style={styles.parent}>
      <View>
        <Text style={styles.h4}>Login</Text>
        <View style={styles.wrap1}>
          <Input
            style={styles.input}
            value={email}
            onChangeText={value => setEmail(value)}
            placeholder="Email"
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
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.boxWrap}>
        <Text style={styles.text1}>Did you forgot your password?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('forgot')}>
          <Text style={styles.text2}>Tap here for reset</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bottomText}>or sign in with</Text>
      </View>
      <View style={styles.iconWrap}>
        <TouchableOpacity style={styles.iconWrap2}>
          <Icon name="facebook" color="#7ECFC0" size={30} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconWrap2}>
          <Icon2 name="google" color="#7ECFC0" size={30} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconWrap2}>
          <Icon3 name="fingerprint" color="#7ECFC0" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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
    paddingTop: 80,
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
  text1: {
    textAlign: 'center',
    paddingTop: 18,
    paddingBottom: 7,
    fontSize: 16,
  },
  text2: {
    textAlign: 'center',
    color: '#7ECFC0',
    fontSize: 16,
  },
  iconWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 10,
  },
  iconWrap2: {
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 6,
    borderColor: '#7ECFC0',
  },
});
