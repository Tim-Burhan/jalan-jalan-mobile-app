import {http} from '../../helpers/http';
import {REACT_APP_BASE_URL} from '@env';

export const getUserById = (token, id) => async dispatch => {
  try {
    const {data} = await http(token).get(`${REACT_APP_BASE_URL}/profile/${id}`);
    dispatch({
      type: 'GET_USER_BY_ID',
      payload: data.results,
    });
  } catch (err) {
    dispatch({
      type: 'GET_USER_BY_ID_FAILED',
      payload: err.response.data.message,
    });
  }
};
