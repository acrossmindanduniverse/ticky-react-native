const initialState = {
  details: {},
  code: {},
  search: [],
  pageInfo: [],
  searchErr: '',
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
    case 'SEARCH_USER': {
      return {
        ...state,
        search: action.payload.user,
        pageInfo: action.payload.pageInfo,
      };
    }
    case 'SEARCH_USER_NEXT': {
      return {
        ...state,
        search: [...state.search, ...action.payload.user],
        pageInfo: action.payload.pageInfo,
      };
    }
    case 'SEARCH_USER_REJECTED': {
      return {
        ...state,
        searchErr: action.error,
      };
    }
    case 'SEARCH_DEFAULT': {
      return {
        ...state,
        search: [],
        pageInfo: [],
        searchErr: '',
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
    case 'CLEAR_PROFILE': {
      return {
        ...state,
        details: {},
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
