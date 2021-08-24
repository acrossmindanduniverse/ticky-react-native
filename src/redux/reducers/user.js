const initialState = {
  details: {},
  code: {},
  errMsg: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_GET_DETAILS': {
      return {
        ...state,
        details: action.payload,
      };
    }
    case 'USER_GET_DETAILS_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    case 'USER_UPDATE': {
      return {
        ...state,
        details: action.payload,
      };
    }
    case 'USER_UPDATE_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    // case 'COMPARE': {
    //   return {
    //     ...state,
    //     code: action.payload,
    //   };
    // }
    // case 'COMPARE_FAILED': {
    //   return {
    //     ...state,
    //     errMsg: action.payload,
    //   };
    // }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default user;
