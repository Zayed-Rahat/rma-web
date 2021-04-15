import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Home from './components/Home';
import LatestNews from './components/news/LatestNews';


function App() {
  return (
    <Router>

        
        <Switch>
        <Switch>
        <Route  exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home/>
            </Route>
            <Route path="/latestnews">
            <LatestNews/>
            </Route>
          </Switch>
  
          </Switch>

    </Router>
  );
}

export default App;
