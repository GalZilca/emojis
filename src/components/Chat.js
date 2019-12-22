
import React, { useState } from "react";
import { Container } from 'semantic-ui-react'

export const Chat = () => {
  //const [messages, setMessages] = useState([])
  const [users, setUsers] = useState([]);

  return (
    <Container style={{ marginTop: 20 }}>
      <h1>Emojis app Chat</h1>
    </Container>
  )
}
