import {ADD_TODO} from './actionTypes'

const initialState = {
  todos: [],
}

export const todoApp = (state = initialState, { todo, type }) => {
  switch (type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, ...todo]
      }

    default:
      return state
  }
}
