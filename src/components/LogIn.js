import React, { useState } from "react";
import { Link } from 'react-router-dom';
import emojis from '../images/emojis.jfif'
import { Container, Form, Input, Button, Header } from 'semantic-ui-react'

export const LogIn = () => {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")

  return (
    <Container style={{ marginTop: 60 }}>
      <h1> Emojis app </h1>
      <Container style={{ height: "350px", marginTop: 40, backgroundImage:`url(${emojis})` }}>
          
        <Form className="App">
          <Form.Field>
            <Input style={{ width: "370px", marginTop: 80}}
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
            <Link to="/chat" onClick={(event) => {
              if (name === "") {
                alert("please enter name")
                event.preventDefault()
                return
              }

              if (mail === "") {
                alert("pleas anter mail")
                event.preventDefault()
                return
              }
            }}>
            <Button style={{ backgroundColor: "black", color: "white" }}> Log in </Button> 
            </Link>
          </Form.Field>
        </Form>
      </Container>
    </Container>
  )
}