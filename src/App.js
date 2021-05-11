import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Home from './components/Home';
import ReadOurBlog from './components/news/readOurBlog/ReadOurBlog';
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
            
            <Route path="/readOurBlog" exact component={ReadOurBlog}/>
            <Route path="/newssingle"  exact component={NewsSingle}/>
            <Route path="/newssingle/:id"  component={MoreNews}/>
          
  
          </Switch>

    </Router>
  );
}

export default App;
