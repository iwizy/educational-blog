import API from 'src/api';

export const getPostDataAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'POST_PAGE_GET_DATA_REQUEST' });
      const response = await API.posts.getPostById(id);
      dispatch({ type: 'POST_PAGE_GET_DATA_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'POST_PAGE_GET_DATA_FAIL' });
    }
  }
};

export const leavingPostAction = () => {
  return function (dispatch) {
    dispatch({type: 'POST_PAGE_LEAVING'});
  }
};

export const increaseLikeCountAction = (id) => {
  return async function (dispatch) {
    try {
      dispatch({type: 'POST_PAGE_INCREASE_LIKE_REQUEST'});
      const response = await API.posts.increasePostLike(id);
      dispatch({type: 'POST_PAGE_INCREASE_LIKE_SUCCESS', payload: response.data})
    } catch (error) {
      dispatch({type: 'POST_PAGE_INCREASE_LIKE_FAIL'});
      setTimeout(() => {
          dispatch({type: 'POST_PAGE_MESSAGE_HIDE'});
        }, 5000
      );
    }
  }
};

export const increaseDislikeCountAction = (id) => {
  return async function (dispatch) {
    try {
      dispatch({type: 'POST_PAGE_INCREASE_DISLIKE_REQUEST'});
      const response = await API.posts.increasePostDislike(id);
      dispatch({type: 'POST_PAGE_INCREASE_DISLIKE_SUCCESS', payload: response.data})
    } catch (error) {
      dispatch({type: 'POST_PAGE_INCREASE_DISLIKE_FAIL'});
      setTimeout(() => {
          dispatch({type: 'POST_PAGE_MESSAGE_HIDE'});
        }, 5000
      );
    }
  }
};