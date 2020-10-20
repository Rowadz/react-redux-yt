import {
  FETCH_POSTS_STARTED,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from './actionTypes'

export const fetchPostsStarted = () => {
  return { type: FETCH_POSTS_STARTED }
}

export const fetchPostsSuccess = (posts) => {
  return { type: FETCH_POSTS_SUCCESS, posts }
}

export const fetchPostsFailure = () => {
  return { type: FETCH_POSTS_FAILURE }
}
