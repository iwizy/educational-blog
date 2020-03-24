const initState = {
  posts: []
};

export default function mainReducer(state = initState, action) {
  switch (action.type) {
    case 'MAIN_PAGE_GET_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
}
