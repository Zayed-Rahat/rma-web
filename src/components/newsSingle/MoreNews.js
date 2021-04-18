import React, { useState, useEffect } from "react";
import './NewsSingle.css';

  function MoreNews({match}) {

    const [ more , setMore] = useState([]);

    useEffect( ()=>{
  
      fetch(`http://api.rmabd.org/latestnews/${match.params.id}`)
      .then(res => res.json())
    .then(news => setMore(news))
    console.log(match);
  
    console.log(more);
    }, [more , match])
 
      return (
          
                <div>
      <div class="News-body_more">
<div class="blog-post">
<div class="blog-post_img">
  <img src={more.image} alt=""/> 
</div>

<div class="blog-post_info">
  <h2 className="arduino1"> {more.title} </h2>
  <p  class="blog-post_text">
       {more.paragraph} 
      </p>
</div>


</div>
</div> 
      
    </div>

              
        
      )
  }
  
  export default MoreNews;
  