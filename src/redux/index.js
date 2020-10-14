import { combineReducers, createStore } from 'redux'
import { todos } from './todos/reducer'
import { addTodo } from './todos/actions'
import { Todo } from './todos/model'

const reducers = combineReducers({
  todos,
})

export default createStore(reducers)

export { addTodo, Todo }
