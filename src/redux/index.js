import { combineReducers, createStore } from 'redux'
import { todos, addTodo, Todo, delTodo } from './todos'
import { posts } from './posts'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducers = combineReducers({
  todos,
  posts,
})

export default createStore(reducers, composeWithDevTools())

export { addTodo, Todo, delTodo }
