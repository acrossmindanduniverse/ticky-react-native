import {http} from '../../helpers/http';
import {ToastAndroid} from 'react-native';
// import {API_URL} from '@env';
const API_URL = 'http://localhost:8080';
export const getUser = token => {
  return async dispatch => {
    const {data} = await http(token).get(`${API_URL}/users/signed`);
    dispatch({
      type: 'USER_GET_DETAILS',
      payload: data.data,
    });
  };
};

export const searchUser =
  (token, value, sortBy, sort, page) => async dispatch => {
    console.log(page, 'search action123');
    try {
      if (page > 1) {
        const {data} = await http(token).get(
          `${API_URL}/users?search=${value}&sort[${sortBy}]=${sort}&page=${page}`,
        );
        console.log(data, 'action 123 123');
        dispatch({
          type: 'SEARCH_USER_NEXT',
          payload: {
            user: data.pageInfo.totalData.rows,
            pageInfo: data.pageInfo,
          },
        });
      } else {
        const {data} = await http(token).get(
          `${API_URL}/users?search=${value}&sort[${sortBy}]=${sort}`,
        );
        dispatch({
          type: 'SEARCH_USER',
          payload: {
            user: data.pageInfo.totalData.rows,
            pageInfo: data.pageInfo,
          },
        });
      }
    } catch (err) {
      dispatch({
        type: 'SEARCH_USER_REJECTED',
        error: err.response.data.data,
      });
    }
  };

export const searchDefault = () => dispatch => {
  dispatch({
    type: 'SEARCH_DEFAULT',
  });
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
