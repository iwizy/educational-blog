import cloneDeep from 'lodash/cloneDeep';

const initState = {
  data: null,
  dataForm: {
    currentPassword: '',
    newPassword: ''
  },
  passwordModalShow: false,
  message: {
    header: '',
    content: '',
    isHidden: true
  },
  posts: []
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
    case 'USER_PAGE_GET_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload
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
        passwordModalShow: !state.passwordModalShow,
        message: {
          header: 'Изменение пароля',
          content: 'Вы успешно изменили пароль',
          color: 'green',
          isHidden: false
        }
      };
    case 'USER_PAGE_CHANGE_PASS_CURRENT_PASS_WRONG':
      return {
        ...state,
        passwordModalShow: !state.passwordModalShow,
        message: {
          header: 'Изменение пароля',
          content: 'Вы неверно указали текущий пароль',
          color: 'red',
          isHidden: false
        }
      };
    case 'USER_PAGE_CHANGE_PASS_MODAL':
      return {
        ...state,
        passwordModalShow: !state.passwordModalShow
      };
    case 'USER_PAGE_CHANGE_PASS_MESSAGE_HIDE':
      return {
        ...state,
        message: {
          header: '',
          content: '',
          isHidden: true
        }
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
