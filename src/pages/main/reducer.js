const initState = {
  posts: [],
  isLoadingPosts: false,
  message: {
    header: '',
    content: '',
    isHidden: true
  }
};

export default function mainReducer(state = initState, action) {
  switch (action.type) {
    case 'MAIN_PAGE_INIT_GET_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload
      };
    case 'MAIN_PAGE_SCROLL_GET_POSTS_REQUEST':
      return {
        ...state,
        isLoadingPosts: true
      };
    case 'MAIN_PAGE_SCROLL_GET_POSTS_SUCCESS':
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        isLoadingPosts: false
      };
    case 'MAIN_PAGE_SCROLL_GET_POSTS_FAIL':
      return {
        ...state,
        isLoadingPosts: false
      };
    case 'MAIN_PAGE_INCREASE_LIKE_SUCCESS':
      return {
        ...state,
        posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
      };
    case 'MAIN_PAGE_INCREASE_LIKE_FAIL':
      return {
        ...state,
        message: {
          header: 'Лайки',
          content: 'Для отметки поста лайком вам необходимо авторизоваться',
          color: 'red',
          isHidden: false
        }
      };
    case 'MAIN_PAGE_INCREASE_DISLIKE_SUCCESS':
      return {
        ...state,
        posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
      };
    case 'MAIN_PAGE_INCREASE_DISLIKE_FAIL':
      return {
        ...state,
        message: {
          header: 'Дизлайки',
          content: 'Для отметки поста дизлайком вам необходимо авторизоваться',
          color: 'red',
          isHidden: false
        }
      };
    case 'MAIN_PAGE_MESSAGE_HIDE':
      return {
        ...state,
        message: {
          header: '',
          content: '',
          isHidden: true
        }
      };
    default:
      return state;
  }
}
