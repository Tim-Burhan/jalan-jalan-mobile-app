const initialState = {
  data: [],
  errMsg: '',
  detailData: '',
};

const transaction = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BOOKING_USER': {
      return {
        ...state,
        data: action.payload,
        errMsg: '',
      };
    }
    case 'GET_BOOKING_USER_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    case 'GET_BOOKING_USER_BY_ID': {
      return {
        ...state,
        detailData: action.payload,
        errMsg: '',
      };
    }
    case 'GET_BOOKING_USER_BY_ID_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    case 'ADD_BOOKING': {
      return {
        ...state,
        errMsg: '',
      };
    }
    case 'ADD_BOOKING_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    case 'CONFIRM_PAYMENT': {
      return {
        ...state,
        errMsg: '',
      };
    }
    case 'CONFIRM_PAYMENT_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    case 'CONFIRM_DELETE_PAYMENT': {
      return {
        ...state,
        errMsg: '',
      };
    }
    case 'CONFIRM_DELETE_PAYMENT_FAILED': {
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

export default transaction;
