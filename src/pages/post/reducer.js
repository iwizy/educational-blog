const initState = {
  data: null
};

export default function postReducer(state = initState, action) {
  switch (action.type) {
    case 'POST_PAGE_GET_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload
      };
    case 'POST_PAGE_LEAVING':
      return {
        ...state,
        data: null
      };
    default:
      return state;
  }
}
