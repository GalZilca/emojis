import React, { useState } from "react";
import "./App.css";
import { Container, Form, Input, Button } from 'semantic-ui-react'

function App() {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")

  return (
    <Container style={{ marginTop: 20 }}>
      <h1>Emojis app</h1>
      <Form className="App" style={{ marginTop: 80 }}>
        <Form.Field>
          <Input style={{ width: "370px" }}
            placeholder="User name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <Input style={{ width: "370px" }}
            placeholder="User mail"
            value={mail}
            onChange={e => setMail(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <Button onClick={() => {
            this.props.navigation.navigate('Chat')
          }} > Log in
          </Button>
        </Form.Field>
      </Form>
    </Container>
  )
}

export default App;
