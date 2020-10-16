import { combineReducers, createStore } from 'redux'
import { todos, addTodo, Todo, delTodo } from './todos'
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
  todos,
})

export default createStore(reducers,  composeWithDevTools())

export { addTodo, Todo, delTodo }
