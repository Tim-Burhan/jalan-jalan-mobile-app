import {http} from '../../helpers/http';
import {REACT_APP_BASE_URL} from '@env';

export const getProduct =
  (
    search,
    filterAirline,
    filterPrice1,
    filterPrice2,
    filterDeparture1,
    filterArrive1,
  ) =>
  async dispatch => {
    try {
      const {data} = await http().get(
        `${REACT_APP_BASE_URL}/products/?search=${search}&filterAirline=${filterAirline}&filterPrice1=${filterPrice1}&filterPrice2=${filterPrice2}&filterDeparture1=${filterDeparture1}&filterArrive1=${filterArrive1}`,
      );
      dispatch({
        type: 'GET_PRODUCT',
        payload: data.results,
      });
    } catch (err) {
      dispatch({
        type: 'GET_DETAIL_PRODUCT',
        payload: err.response.data.message,
      });
    }
  };

export const getProductById = id => async dispatch => {
  try {
    const {data} = await http().get(`${REACT_APP_BASE_URL}/products/${id}`);
    dispatch({
      type: 'GET_PRODUCT_BY_ID',
      payload: data.results,
    });
  } catch (err) {
    dispatch({
      type: 'GET_PRODUCT_BY_ID_FAILED',
      payload: err.response.data.message,
    });
  }
};
