const initialState = {
  data: [],
  detailData: [],
  errMsg: '',
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT': {
      return {
        ...state,
        data: action.payload,
        errMsg: '',
      };
    }
    case 'GET_DETAIL_PRODUCT': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    case 'GET_PRODUCT_BY_ID': {
      return {
        ...state,
        detailData: action.payload,
        errMsg: '',
      };
    }
    case 'GET_PRODUCT_BY_ID_FAILED': {
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

export default product;
