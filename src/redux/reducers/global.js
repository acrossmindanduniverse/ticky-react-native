const initStateGlobal = {
  isLoading: false,
};

const globalReducer = (state = initStateGlobal, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default globalReducer;
