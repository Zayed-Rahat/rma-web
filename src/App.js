import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Home from './components/Home';
import LatestNews from './components/news/LatestNews';
import MoreNews from './components/newsSingle/MoreNews';
import NewsSingle from './components/newsSingle/NewsSingle';


function App() {
  return (
    <Router>

        
        <Switch>
        
        <Route  exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home/>
            </Route>
            <Route path="/latestnews" component={LatestNews}/>
            

            <Route path="/newssingle"  exact component={NewsSingle}/>
            <Route path="/newssingle/:id"  component={MoreNews}/>
          
  
          </Switch>

    </Router>
  );
}

export default App;
