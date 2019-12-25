import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";

import { LogIn } from "./components/LogIn"
import { Chat } from "./components/Chat"
import { Error } from "./components/Error"

function App() {
  return (      
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LogIn}/>
        <Route exact path="/chat" component={Chat}/>
        <Route component={Error}/>
      </Switch>
    </BrowserRouter>
 );
}

export default App;
