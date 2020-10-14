import React from 'react'
import 'rsuite/dist/styles/rsuite-default.css'
import { Button } from 'rsuite'
import './App.css'
import { connect } from 'react-redux'
import { addTodo, Todo } from './redux'

const App = ({ dispatch, todos }) => {
  const createTodo = () =>
    dispatch(addTodo(new Todo(1, 'learn the basics of redux')))

  console.log(todos)

  return (
    <main>
      <Button appearance="primary" onClick={createTodo}>
        Test
      </Button>
    </main>
  )
}

export default connect(({ todos }) => {
  return { todos }
})(App)
