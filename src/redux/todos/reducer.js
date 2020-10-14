import { ADD_TODO } from './actionTypes'

const initialState = []

export const todos = (state = initialState, { todo, type }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, todo]

    default:
      return state
  }
}
