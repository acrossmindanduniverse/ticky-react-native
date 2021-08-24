import http from '../../helpers/http';
import {API_URL} from '@env';

export const getTickets = data => {
  return async dispatch => {
    try {
      const {data: results} = await http().get(
        `${API_URL}/tickets/tickets?departure=${data.departure}&destination=${data.destination}&searchClass=${data.class}`,
      );
      dispatch({type: 'GET_TICKETS', payload: results.results});
      console.log(results.results);
    } catch (err) {
      console.log(err);
    }
  };
};
