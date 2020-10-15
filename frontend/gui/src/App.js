import React from "react";
import "./App.css";
import 'antd/dist/antd.css'; 

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Withme from "./screens/Withme";
import Journey from "./screens/Journey";
import Blog from "./screens/Blog";
import Healthcare from "./screens/Healthcare";

import CustomLayout from './containers/Layout';
import BlogList from './containers/BlogListView';

function App() {
  return (
    <Router>
      <BlogList />
    </Router>
  );
}

export default App;
