import { combineReducers, createStore } from 'redux'
import { todos, addTodo, Todo } from './todos'

const reducers = combineReducers({
  todos,
})

export default createStore(reducers)

export { addTodo, Todo }
