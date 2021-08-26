const initialState = {
  chatList: [],
  chatRoom: [],
};

const chat = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CHAT_LIST': {
      return {
        ...state,
        chatList: action.payload,
      };
    }
    case 'GET_CHAT_ROOM': {
      return {
        ...state,
        chatRoom: action.payload,
      };
    }
    case 'SEND_CHAT': {
      return {
        ...state,
      };
    }
    case 'DELETE_CHAT': {
      return {
        ...state,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default chat;
