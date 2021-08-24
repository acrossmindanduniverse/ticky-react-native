const initialState = {
  data: [],
};

const trx = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TICKETS':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default trx;
