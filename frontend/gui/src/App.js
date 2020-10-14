import React from "react";
import "./App.css";
import 'antd/dist/antd.css'; 

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Withme from "./screens/Withme";
import Journey from "./screens/Journey";
import Blog from "./screens/Blog";
import Healthcare from "./screens/Healthcare";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/workwithme">
          <Withme />
        </Route>
        <Route path="/Journey">
          <Journey />
        </Route>
        <Route path="/Blog">
          <Blog />
        </Route>
        <Route path="/Healthcare">
          <Healthcare />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
