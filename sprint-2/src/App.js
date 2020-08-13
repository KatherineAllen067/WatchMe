import React from 'react';
import './App.scss';
import Main from './pages/Main.js';
import Uploads from './pages/Uploads.js';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/uploads" exact component={Uploads} />  
      </Switch>
    </BrowserRouter>
  )
}

export default App;
