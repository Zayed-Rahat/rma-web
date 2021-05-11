import React from "react";
import DataLoad from "./news/DataLoad";

import {

  Link
} from "react-router-dom";
function News() {
  return (
    <>
      <div class="row">
        <div class="col-md-3 left_content"> 
          <h5 class="get_update">Get Updated</h5>
          <h1 class="latest_news">LATEST NEWS&#10078;</h1>
        </div> 
        <div className="col-md-7 right_lekha">
          <DataLoad/>
        </div>
      </div>

      <div class="row button_div">
        <button type="button" class="button_read_blog btn btn-primary m-auto"><Link className="link" to="/readOurBlog">
          READ our BLOG</Link>
        </button>
      </div>
    </>
  );
}

export default News;