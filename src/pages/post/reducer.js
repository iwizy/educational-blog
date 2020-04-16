const initState = {
  data: null,
  author: null,
  message: {
    header: '',
    content: '',
    isHidden: true
  }
};

export default function postReducer(state = initState, action) {
  switch (action.type) {
    case 'POST_PAGE_GET_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload,
        author: action.payload.author
      };
    case 'POST_PAGE_LEAVING':
      return {
        ...state,
        data: null
      };
    case 'POST_PAGE_INCREASE_LIKE_SUCCESS':
      return {
        ...state,
        data: action.payload
      };
    case 'POST_PAGE_INCREASE_LIKE_FAIL':
      return {
        ...state,
        message: {
          header: 'Лайки',
          content: 'Для отметки поста лайком вам необходимо авторизоваться',
          color: 'red',
          isHidden: false
        }
      };
    case 'POST_PAGE_INCREASE_DISLIKE_SUCCESS':
      return {
        ...state,
        data: action.payload
      };
    case 'POST_PAGE_INCREASE_DISLIKE_FAIL':
      return {
        ...state,
        message: {
          header: 'Дизлайки',
          content: 'Для отметки поста дизлайком вам необходимо авторизоваться',
          color: 'red',
          isHidden: false
        }
      };
    case 'POST_PAGE_MESSAGE_HIDE':
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
