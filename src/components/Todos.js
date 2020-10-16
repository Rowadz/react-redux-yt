import React from 'react'
import { connect } from 'react-redux'
import { List, IconButton, Icon, FlexboxGrid, Alert } from 'rsuite'
import { delTodo } from '../redux'

const Todos = ({ dispatch, todos }) => {
  const del = (todo) => {
    dispatch(delTodo(todo))
    Alert.info(`Deleted ${todo.text}`)
  }

  return (
    <section>
      <List>
        {todos.map((todo, i) => (
          <List.Item key={i} index={i}>
            <FlexboxGrid justify="space-around">
              <FlexboxGrid.Item colspan={12}>
                <h3>{todo.text}</h3>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={10}></FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={2}>
                <IconButton
                  icon={<Icon icon="minus" />}
                  color="red"
                  circle
                  onClick={() => del(todo)}
                />
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </List.Item>
        ))}
      </List>
    </section>
  )
}

export default connect(({ todos }) => ({ todos }))(Todos)
