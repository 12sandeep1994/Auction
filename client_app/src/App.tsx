import React from 'react';
import Home from './Home'
import Auction from './Auction'
import io from 'socket.io-client';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const socket = io("http://localhost:5000");

function App() {
  return (
    <Router>
      <Switch>
      
      <Route path="/auction"  render={props => (<Auction socket={socket} />)}/>

        

        <Route path="/" >
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;