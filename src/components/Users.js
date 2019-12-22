
import React from "react"

export const Users = ({ users }) => (
    <List>
        {users.map(user => (
            <List.Item key={user.name}>
                <Header>{user.name}</Header>
            </List.Item>
        ))}
    </List>
)