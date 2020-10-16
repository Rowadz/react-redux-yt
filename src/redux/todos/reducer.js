import { ADD_TODO, REMOVE_TODO } from './actionTypes'

const initialState = []

export const todos = (state = initialState, { todo, type }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, todo]
    case REMOVE_TODO:
      return state.filter(({ id }) => todo.id !== id)

    default:
      return state
  }
}
