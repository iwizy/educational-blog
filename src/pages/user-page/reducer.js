const initState = {
  data: null,
  passwordModalShow: false
};

export default function profileReducer(state = initState, action) {
  switch (action.type) {
    case 'USER_PAGE_GET_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload
      };
    case 'USER_PAGE_CHANGE_PASS_SUCCESS':
      return {
        ...state,
        data: action.payload,
        passwordModalShow: !state.passwordModalShow
      };
    case 'USER_PAGE_CHANGE_PASS_MODAL':
      return {
        ...state,
        data: action.payload,
        passwordModalShow: !state.passwordModalShow
      };
    default:
      return state;
  }
}
