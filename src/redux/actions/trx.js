import {http} from '../../helpers/http';
import {APP_URL_LOCAL} from '@env';

export const createTransaction = (token, setData) => async dispatch => {
  const form = new URLSearchParams();
  form.append('total_amount', setData.total_amount);
  form.append('id_ticket', setData.id_ticket);
  try {
    const {data} = await http(token).post(
      `${APP_URL_LOCAL}/transactions/create-transaction`,
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
      `${APP_URL_LOCAL}/transactions/proceed-to-payment/${id}`,
    );
    dispatch({
      type: 'PROCEED_TO_PAYMENT',
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getTransactions = token => async dispatch => {
  try {
    const {data} = await http(token).get(
      `${APP_URL_LOCAL}/transactions/transaction`,
    );
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
      `${APP_URL_LOCAL}/transactions/transaction/${id}`,
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
