const initState = {
  counter: 0,
  user: null
};

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case 'SIGN-IN_SUCCESS':
    case 'SIGN-UP_SUCCESS':
    case 'USER_PAGE_GET_DATA_SUCCESS':
    case 'APPLICATION-AUTH':
      return {
        ...state,
        user: action.payload
      };
    case 'APPLICATION-SIGN-OUT':
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
}
