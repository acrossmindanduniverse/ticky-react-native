import {http} from '../../helpers/http';
import {ToastAndroid} from 'react-native';
// import {API_URL} from '@env';
// import {API_URL} from '@env';
const API_URL = 'http://localhost:8080';
export const authLogin = (Data, navigation) => {
  return async dispatch => {
    console.log(Data);
    const form = new URLSearchParams();
    form.append('email', Data.email);
    form.append('password', Data.password);
    try {
      const {data} = await http().post(
        `${API_URL}/users/login`,
        form.toString(),
      );
      dispatch({
        type: 'AUTH_LOGIN',
        payload: data.token,
      });
      ToastAndroid.showWithGravity(
        'Login Success!',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
      navigation.reset({index: 0, routes: [{name: 'home'}]});
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'AUTH_LOGIN_FAILED',
        payload: err.response.data.message,
      });
    }
  };
};

export const authRegister = (Data, navigation) => {
  return async dispatch => {
    const form = new URLSearchParams();
    form.append('email', Data.email);
    form.append('password', Data.password);
    form.append('fullname', Data.fullname);
    // console.log(form);
    // console.log(Data);
    // console.log(Data.email);
    try {
      const {data} = await http().post(
        `${API_URL}/users/register`,
        form.toString(),
        // console.log(data),
      );
      dispatch({
        type: 'REGISTER',
        payload: data.message,
      });
      ToastAndroid.showWithGravity(
        'Create Account Successfully!',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
      navigation.navigate('login');
    } catch (err) {
      dispatch({
        type: 'REGISTER_FAILED',
        payload: err.response.data.message,
      });
    }
  };
};

export const authLogout = () => ({
  type: 'AUTH_LOGOUT',
});
