import {http} from '../../helpers/http';
import {REACT_APP_BASE_URL} from '@env';

export const searchData =
  (search, page, destination, price, token) => async dispatch => {
    try {
      const {data} = await http(token).get(
        `${REACT_APP_BASE_URL}/products/?search=${destination}l&page=${page}&filterAirline=${search}&filterPrice1=${price}`,
      );
      dispatch({
        type: 'SEARCH',
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: 'SEARCH_FAILED',
        payload: err.response.data.message,
      });
    }
  };
