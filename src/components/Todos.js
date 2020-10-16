import React from 'react'
import { connect } from 'react-redux'
import { List } from 'rsuite'

const Todos = ({ todos }) => {
  return (
    <section>
      <List>
        {todos.map((todo, i) => (
          <List.Item key={i} index={i}>
            {todo.text}
          </List.Item>
        ))}
      </List>
    </section>
  )
}

export default connect(({ todos }) => ({ todos }))(Todos)
