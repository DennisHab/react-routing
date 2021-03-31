import React, { useState } from 'react';
import './App.css';
import TopMenu from "./components/TopMenu";
import BlogOverview from "./pages/BlogOverview";
import Blogposts from "./pages/Blogposts";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);
  return (
      <Router>
          <TopMenu logState={isAuthenticated} toggleLogState = {toggleIsAuthenticated} />
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route exact path="/blog-overview">
                  <BlogOverview logState={isAuthenticated}/>
              </Route>
              <PrivateRoute
                  logState={isAuthenticated}
                  path="/blog-posts/:id"
                  component={<Blogposts logState={isAuthenticated} />}
              />
          </Switch>
      </Router>
  );
}
export default App;


