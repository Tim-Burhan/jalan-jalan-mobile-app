const initialState = {
  data: [],
  errMsg: '',
};

const destination = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DESTINATION': {
      return {
        ...state,
        data: action.payload,
        errMsg: '',
      };
    }
    case 'GET_DESTINATION_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default destination;
