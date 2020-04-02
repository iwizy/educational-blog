import API from 'src/api';

export const getUserDataAction = (id) => {
  return async function (dispatch) {
    try {
      dispatch({type: 'USER_PAGE_GET_DATA_REQUEST'});
      const response = await API.user.getUserData(id);
      dispatch({type: 'USER_PAGE_GET_DATA_SUCCESS', payload: response.data});
    } catch (error) {
      dispatch({type: 'USER_PAGE_GET_DATA_FAIL'});
    }
  }
};