import http from '../../helpers/http';
import {API_URL} from '@env';

export const getTickets = data => {
  return async dispatch => {
    dispatch({type: 'SET_LOADING', payload: true});
    try {
      dispatch({type: 'GET_TICKETS', payload: []});
      const {data: results} = await http().get(
        `${API_URL}/tickets/tickets?departure=${data.departure}&destination=${data.destination}&searchClass=${data.class}`,
      );
      dispatch({type: 'SET_LOADING', payload: false});
      dispatch({type: 'GET_TICKETS', payload: results.results});
      console.log(results.results);
    } catch (err) {
      console.log(err);
      dispatch({type: 'SET_LOADING', payload: false});
    }
  };
};
