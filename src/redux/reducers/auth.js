const initialState = {
  token: null,
  msg: '',
  id: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN': {
      return {
        ...state,
        token: action.payload.results.token,
        msg: action.payload.message,
        id: action.payload.results.id,
      };
    }
    case 'AUTH_LOGIN_FAILED': {
      return {
        ...state,
        msg: action.payload,
      };
    }
    case 'AUTH_REGISTER': {
      return {
        ...state,
        msg: action.payload,
      };
    }
    case 'AUTH_REGISTER_FAILED': {
      return {
        ...state,
        msg: action.payload,
      };
    }
    case 'AUTH_LOGOUT': {
      return {
        ...state,
        token: null,
        msg: '',
        id: '',
      };
    }
    case 'AUTH_RESET': {
      return {
        ...state,
        msg: '',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default auth;
