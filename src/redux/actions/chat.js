import {API_URL} from '@env';
import {http} from './../../helpers/http';
// const API_URL = 'http://localhost:8080';
export const getChatList = token => async dispatch => {
  try {
    const {data} = await http(token).get(`${API_URL}/chats/chat`);
    dispatch({
      type: 'GET_CHAT_LIST',
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getChatRoom = (token, id) => async dispatch => {
  try {
    const {data} = await http(token).get(`${API_URL}/chats/room/${id}`);
    dispatch({
      type: 'GET_CHAT_ROOM',
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteChat = (token, id, chatId) => async dispatch => {
  const form = new URLSearchParams();
  form.append('chatId', chatId);
  try {
    const {data} = await http(token).delete(`${API_URL}/chats/delete/${id}`, {
      data: form,
    });
    console.log(data, 'action data123');
    dispatch({
      type: 'DELETE_CHAT',
      payload: data.data,
    });
    dispatch(getChatList(token));
    dispatch(getChatRoom(token, id));
  } catch (err) {
    console.log(err);
  }
};

export const sendChat = (token, id, setData) => async dispatch => {
  const form = new FormData();
  form.append('message', setData.message);
  form.append('attachment', {
    uri: setData.attachment.uri,
    name: setData.attachment.fileName,
    type: setData.attachment.type,
  });
  console.log(form, 'action form');
  try {
    const {data} = await http(token).post(`${API_URL}/chats/send/${id}`, form);
    dispatch({
      type: 'SEND_CHAT',
      payload: data.data,
    });
    dispatch(getChatList(token));
  } catch (err) {
    console.log(err);
  }
};
