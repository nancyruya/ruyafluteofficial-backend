import React from "react";
import { Fragment } from "react";
import Navigationbar from "../components/Navigationbar";
import Footerbar from "../components/Footerbar";

import BlogList from '../containers/BlogListView';

function Blog() {
  return (
    <Fragment>
      <Navigationbar />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <BlogList/>
      <br/>   
      <Footerbar />
    </Fragment>
  );
}

export default Blog;