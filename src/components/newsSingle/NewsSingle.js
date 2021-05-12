import React from 'react'
import { Link } from 'react-router-dom';

import './NewsSingle.css';

function NewsSingle(props) {
  
  const {image,title,paragraph,id} = props.newsSingle;

  return (
    <div>
      <div class="News-body">
<div class="blog-post">r
<div class="blog-post_img">
  <img src={image} alt=""/>
</div>

<div >
  <h2 className="arduino1">{title}</h2>
  <p id="text5" class="blog-post_text">
       {paragraph}
      </p>

   <Link to={`/newssingle/${id}`} class="blog-post_cta">  Read more</Link>
</div>


</div>
</div> 
      
    </div>
  )
}

export default NewsSingle;


