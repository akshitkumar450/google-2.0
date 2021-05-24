import React from 'react'
import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          {/**home */}
          <Route path='/' exact={true} >
            <Home />
          </Route>

          <Route path='/search' exact={true}>
            <h1>seach page</h1>
          </Route>
          {/**search results*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
