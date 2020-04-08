import cloneDeep from 'lodash/cloneDeep';

const initState = {
  data: null,
  dataForm: {
    currentPassword: '',
    newPassword: ''
  },
  passwordModalShow: false
};

function merge(state, someObject) {
  const clonnedState = cloneDeep(state);
  return Object.assign(clonnedState, someObject);
}

export default function profileReducer(state = initState, action) {
  switch (action.type) {
    case 'USER_PAGE_GET_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload
      };
    case 'USER_PAGE_CHANGE_DATA_FORM':
      return merge(state, {
        dataForm: {
          ...state.dataForm,
          [action.payload.fieldId]: action.payload.value
        }
      });
    case 'USER_PAGE_CHANGE_PASS_SUCCESS':
      return {
        ...state,
        data: action.payload,
        passwordModalShow: !state.passwordModalShow
      };
    case 'USER_PAGE_CHANGE_PASS_MODAL':
      return {
        ...state,
        passwordModalShow: !state.passwordModalShow
      };
    case 'USER_PAGE_CHANGE_PASS_MODAL_CLOSE':
      return {
        ...state,
        passwordModalShow: !state.passwordModalShow
      };
    default:
      return state;
  }
}
