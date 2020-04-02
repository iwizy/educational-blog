const initState = {
  data: null
};

export default function profileReducer(state = initState, action) {
  switch (action.type) {
    case 'USER_PAGE_GET_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
