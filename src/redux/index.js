import thunk from 'redux-thunk'
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { todos, addTodo, Todo, delTodo } from './todos'
import { posts, fetchPosts } from './posts'

const reducers = combineReducers({
  todos,
  posts,
})

export default createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export { addTodo, Todo, delTodo, fetchPosts }
