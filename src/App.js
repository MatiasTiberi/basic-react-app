import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'

import Inicio from './Inicio'
import Familia from './Familia'

axios.defaults.baseURL = 'http://190.191.72.25';
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>

    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/familia">Familia</Link>
          </li>
        </ul>
      </nav>
    </div>


      <Switch>
        <Route path="/familia">
          <Familia />
        </Route>
        <Route path="/">
          <Inicio />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
