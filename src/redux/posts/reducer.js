import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_STARTED,
} from './actionTypes'

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
}

export const posts = (state = initialState, { posts, type }) => {
  switch (type) {
    case FETCH_POSTS_STARTED:
      return { ...state, isLoading: true }
    case FETCH_POSTS_FAILURE:
      return { ...state, isError: true, isLoading: false }
    case FETCH_POSTS_SUCCESS:
      return {
        data: posts,
        isError: false,
        isLoading: false,
      }

    default:
      return state
  }
}
