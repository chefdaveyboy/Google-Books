import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./pages/Search";
import SavedBooks from "./pages/SavedBooks";



function App() {
  return (
    <Router>
      <div>
        <header>
            <h1>Google Books Search</h1>
            <p>Search for and Save Your Favorites</p>
        </header>
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route path="/saved" component={SavedBooks}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
