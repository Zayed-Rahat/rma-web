import React from 'react'
import { Link } from 'react-router-dom';
import './NewsSingle.css'
function NewsSingle(props) {
  
  const {image,title,paragraph} = props.newsSingle;

  return (
    <div>
      <div class="News-body">
<div class="blog-post">
<div class="blog-post_img">
  <img src={image} alt=""/>
</div>

<div class="blog-post_info">
  <h2 className="arduino1">{title}</h2>
  <p id="text5" class="blog-post_text">
       {paragraph}
      </p>
   <Link href="#" class="blog-post_cta">Read more</Link>
</div>


</div>
</div> 
      
    </div>
  )
}

export default NewsSingle;


