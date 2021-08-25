const initialState = {
  transactions: [],
  detailTransaction: [],
  data: [],
  transactionToggle: false,
};

const trx = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_TRANSACTION': {
      return {
        ...state,
        transactionToggle: state.transactionToggle,
      };
    }
    case 'PROCEED_TO_PAYMENT': {
      return {
        ...state,
      };
    }
    case 'TRANSACTION_TOGGLE': {
      return {
        ...state,
        transactionToggle: !state.transactionToggle,
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
