import {http} from '../../helpers/http';
import {REACT_APP_BASE_URL} from '@env';

export const getUserById = token => async dispatch => {
  try {
    const {data} = await http(token).get(
      `${REACT_APP_BASE_URL}/profile/your-profile`,
    );
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

export const changeUser = (token, Data) => async dispatch => {
  const form = new FormData();
  if (Data.picture !== undefined) {
    form.append('picture', {
      uri: Data.picture.uri,
      name: Data.picture.fileName,
      type: Data.picture.type,
    });
  }
  form.append('name', Data.name);
  form.append('username', Data.username);
  form.append('email', Data.email);
  form.append('city', Data.city);
  form.append('post_code', Data.postCode);
  form.append('address', Data.address);
  form.append('phoneNumber', Data.phoneNumber);
  try {
    const {data} = await http(token).put(
      `${REACT_APP_BASE_URL}/profile/editprofile`,
      form,
    );
    if (Data.picture !== undefined) {
      dispatch({
        type: 'CHANGE_USER',
        payload: data.message,
      });
    } else {
      dispatch({
        type: 'CHANGE_USER',
        payload: data.Message,
      });
    }
  } catch (err) {
    dispatch({
      type: 'CHANGE_USER_FAILED',
      payload: err.response.data.Message,
    });
  }
};
