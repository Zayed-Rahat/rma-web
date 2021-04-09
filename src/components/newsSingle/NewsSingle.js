import React from "react";
import "./NewsSingle.css";
import { Link } from 'react-router-dom';


const NewsSingle = ({ newsSingle }) => {
  return (
<div class="News-body">
<div class="blog-post">
<div class="blog-post_img">
  <img src={newsSingle.Url} alt=""/>
</div>

<div class="blog-post_info">
  <h2 className="arduino1">{newsSingle.Title}</h2>
  <p class="blog-post_text">
  {newsSingle.Body}
  </p>
   <Link href="#" class="blog-post_cta">Read more</Link>
</div>


</div>
</div>
  );
};

export default NewsSingle;


