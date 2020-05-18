import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./pages/Search";
import SavedBooks from "./pages/SavedBooks";



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route path="/saved" component={SavedBooks}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
