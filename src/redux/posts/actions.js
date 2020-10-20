import {
  FETCH_POSTS_STARTED,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from './actionTypes'
import { Posts } from './model'

export const fetchPostsStarted = () => {
  return { type: FETCH_POSTS_STARTED }
}

export const fetchPostsSuccess = (posts) => {
  return { type: FETCH_POSTS_SUCCESS, posts }
}

export const fetchPostsFailure = () => {
  return { type: FETCH_POSTS_FAILURE }
}

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsStarted())
    return fetch('http://jsonplaceholder.typicode.com/photos?_limit=5')
      .then((res) => res.json())
      .then((posts) =>
        dispatch(fetchPostsSuccess(posts.map((post) => new Posts(post))))
      )
      .catch((err) => {
        console.error(err)
        dispatch(fetchPostsFailure())
      })
  }
}
