import React, { useState } from 'react'
import 'rsuite/dist/styles/rsuite-dark.css'
import {
  Button,
  Container,
  Header,
  Navbar,
  Content,
  FlexboxGrid,
  Panel,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
  Alert,
  Divider,
} from 'rsuite'
import './App.css'
import { connect } from 'react-redux'
import { addTodo, delTodo, Todo } from './redux'
import { generate } from 'shortid'
import Todos from './components/Todos'

const App = ({ addTodo, delTodo, todos  }) => {
  const [state, setState] = useState({ txt: '' })
  const createTodo = () => {
    addTodo(state.txt)
    Alert.success(`Added A TODO text -> ${state.txt}`)
    setState({ txt: '' })
  }
  const updateTxt = (txt) => {
    setState({ txt })
  }

  return (
    <div className="main">
      <Container>
        <Header>
          <Navbar appearance="inverse">
            <Navbar.Header>
              <p className="navbar-brand">Redux React TODO</p>
            </Navbar.Header>
          </Navbar>
        </Header>
        <Content>
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={12}>
              <Panel header={<h3>Add ToDo</h3>} bordered>
                <Form fluid>
                  <FormGroup>
                    <ControlLabel>What you want to do?</ControlLabel>
                    <FormControl
                      name="task"
                      onChange={updateTxt}
                      value={state.txt}
                    />
                  </FormGroup>
                  <FormGroup>
                    <ButtonToolbar>
                      <Button appearance="primary" onClick={createTodo}>
                        Create
                      </Button>
                    </ButtonToolbar>
                  </FormGroup>
                </Form>
              </Panel>
              <Divider />
              <Todos delTodo={delTodo} todos={todos} />
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
      </Container>
    </div>
  )
}

const mapStateToProps = ({ todos }, ownProps) => {
  return { todos }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    delTodo: (todo) => dispatch(delTodo(todo)),
    addTodo: (txt) => dispatch(addTodo(new Todo(generate(), txt)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
