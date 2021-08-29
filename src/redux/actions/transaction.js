import {http} from '../../helpers/http';
import {REACT_APP_BASE_URL} from '@env';

export const getBookingUser = token => async dispatch => {
  try {
    const {data} = await http(token).get(
      `${REACT_APP_BASE_URL}/transaction/user-transaction`,
    );
    dispatch({
      type: 'GET_BOOKING_USER',
      payload: data.results,
    });
  } catch (err) {
    dispatch({
      type: 'GET_BOOKING_USER_FAILED',
      payload: err.response.data.message,
    });
  }
};

export const getBookingUserId = (token, id) => async dispatch => {
  try {
    const {data} = await http(token).get(
      `${REACT_APP_BASE_URL}/transaction/detail-transaction/${id}`,
    );
    dispatch({
      type: 'GET_BOOKING_USER_BY_ID',
      payload: data.results,
    });
  } catch (err) {
    dispatch({
      type: 'GET_BOOKING_USER_BY_ID_FAILED',
      payload: err.response.data.message,
    });
  }
};

export const addBooking = (id, token) => async dispatch => {
  const form = new URLSearchParams();
  form.append('productId', id);
  try {
    const {data} = await http(token).post(
      `${REACT_APP_BASE_URL}/transaction/post-transaction`,
      form.toString(),
    );
    dispatch({
      type: 'ADD_BOOKING',
      payload: data.results,
    });
    console.log(data.results);
  } catch (err) {
    dispatch({
      type: 'ADD_BOOKING_FAILED',
      payload: err.response.data.message,
    });
  }
};

export const confirmPayment = (id, token) => async dispatch => {
  try {
    const {data} = await http(token).patch(
      `${REACT_APP_BASE_URL}/transaction/payment-process/${id}`,
    );
    dispatch({
      type: 'CONFIRM_PAYMENT',
      payload: data.results,
    });
  } catch (err) {
    dispatch({
      type: 'CONFIRM_PAYMENT_FAILED',
      payload: err.response.data.message,
    });
  }
};

export const deleteBooking = (id, token) => async dispatch => {
  try {
    const {data} = await http(token).patch(
      `${REACT_APP_BASE_URL}/transaction/delete-transaction/${id}`,
    );
    dispatch({
      type: 'CONFIRM_DELETE_PAYMENT',
      payload: data.results,
    });
  } catch (err) {
    dispatch({
      type: 'CONFIRM_DELETE_PAYMENT_FAILED',
      payload: err.response.data.message,
    });
  }
};
