import {http} from '../../helpers/http';
import {REACT_APP_BASE_URL} from '@env';

export const getDestination = () => async dispatch => {
  try {
    const {data} = await http().get(`${REACT_APP_BASE_URL}/destination`);
    dispatch({
      type: 'GET_DESTINATION',
      payload: data.results,
    });
  } catch (err) {
    dispatch({
      type: 'GET_DESTINATION_FAILED',
      payload: err.response.data.message,
    });
  }
};
