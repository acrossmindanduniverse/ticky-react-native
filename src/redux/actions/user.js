import {http} from '../../helpers/http';
import {ToastAndroid} from 'react-native';
import {API_URL} from '@env';

export const getUser = token => {
  return async dispatch => {
    const {data} = await http(token).get(`${API_URL}/users/signed`);
    dispatch({
      type: 'USER_GET_DETAILS',
      payload: data.data,
    });
  };
};

export const updateProfile = (token, Data) => {
  return async dispatch => {
    const form = new FormData();
    console.log('token asli', token.token);
    console.log(Data.email);
    form.append('picture', {
      uri: Data.picture.uri,
      name: Data.picture.fileName,
      type: Data.picture.type,
    });

    form.append('email', Data.email);
    form.append('phone_number', Data.phone_number);
    form.append('fullname', Data.fullname);
    form.append('city', Data.city);
    form.append('address', Data.address);
    form.append('postcode', Data.postcode);

    try {
      const {data} = await http(token.token).put(
        `${API_URL}/users/update-profile`,
        form,
      );
      console.log(data);
      dispatch({
        type: 'USER_UPDATE',
        payload: data.data,
      });
    } catch (err) {
      dispatch({
        type: 'USER_UPDATE_FAILED',
        payload: console.log('gagal'),
        // payload: err.response.data.message,
      });
    }
  };
};
