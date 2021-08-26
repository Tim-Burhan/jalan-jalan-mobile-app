const initialState = {
  data: [],
  msg: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_BY_ID': {
      return {
        ...state,
        data: action.payload,
      };
    }
    case 'GET_USER_BY_ID_FAILED': {
      return {
        ...state,
        msg: action.payload,
      };
    }
    case 'CHANGE_USER': {
      return {
        ...state,
        msg: action.payload,
      };
    }
    case 'CHANGE_USER_FAILED': {
      return {
        ...state,
        msg: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default user;
