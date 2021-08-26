const initialState = {
  search: [],
  pageInfo: '',
  errMsg: '',
  msg: '',
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH': {
      return {
        ...state,
        search: action.payload.results,
        pageInfo: action.payload.pageInfo,
        errMsg: '',
      };
    }
    case 'SEARCH_FAILED': {
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

export default search;
