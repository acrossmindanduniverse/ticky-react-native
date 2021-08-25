const initialState = {
  transactions: [],
  detailTransaction: [],
};

const trx = (state = initialState, action) => {
  switch (action.type) {
    case 'PROCEED_TO_PAYMENT': {
      return {
        ...state,
      };
    }
    case 'GET_TRANSACTIONS': {
      return {
        ...state,
        transactions: action.payload,
      };
    }
    case 'DETAIL_TRANSACTION': {
      return {
        ...state,
        detailTransaction: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default trx;
