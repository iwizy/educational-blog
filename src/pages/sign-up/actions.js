import API from "src/api";
import { push } from 'connected-react-router';

export const changeFieldAction = ({ fieldId, value }) => ({
  type: 'SIGN-UP_CHANGE_DATA_FORM',
  payload: { fieldId, value }
});

export const singUpAction = (dataForm) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'SIGN-UP_REQUEST' });
      const response = await API.user.signUp(dataForm);
      dispatch({ type: 'SIGN-UP_SUCCESS', payload: response.data });
      dispatch(push('/'));
    } catch (error) {
      dispatch({ type: 'SIGN-UP_FAIL' });
    }
  };
};
