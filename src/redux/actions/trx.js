import http from '../../helpers/http';
const API_URL = 'http://192.168.244.1:8080';

export const createTransaction = (token, setData) => async dispatch => {
  const form = new URLSearchParams();
  form.append('total_amount', setData.total_amount);
  form.append('id_ticket', setData.id_ticket);
  try {
    const {data} = await http(token).post(
      `${API_URL}/transactions/create-transaction`,
      form,
    );
    dispatch({
      type: 'CREATE_TRANSACTION',
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const proceedToPayment = (token, id) => async dispatch => {
  try {
    const {data} = await http(token).put(
      `${API_URL}/transactions/proceed-to-payment/${id}`,
    );
    dispatch({
      type: 'PROCEED_TO_PAYMENT',
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const transactionToggle = () => dispatch => {
  dispatch({
    type: 'TRANSACTION_TOGGLE',
  });
};

export const getTransactions = token => async dispatch => {
  try {
    const {data} = await http(token).get(`${API_URL}/transactions/transaction`);
    dispatch({
      type: 'GET_TRANSACTIONS',
      payload: data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

///transaction/:id

export const getDetailTransaction = (token, id) => async dispatch => {
  try {
    const {data} = await http(token).get(
      `${API_URL}/transactions/transaction/${id}`,
    );
    console.log(data, 'action');
    dispatch({
      type: 'DETAIL_TRANSACTION',
      payload: data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

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
