import React from 'react';
import './App.scss';
import Main from './pages/Main.js';
import Uploads from './pages/Uploads.js';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/uploads" exact component={Uploads} />  
        <Route path="/:videoId" component={Main}/>
        <Route path="/" exact component={Main} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
