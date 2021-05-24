import React from 'react'
import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchPage from './components/SearchPage';

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
            <SearchPage />
          </Route>
          {/**search results*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
