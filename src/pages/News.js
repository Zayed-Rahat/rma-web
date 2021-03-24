import React from 'react'
import NewsImage from './news/NewsImage';
import NewsInner from './news/NewsInner';

function News() {
    return (
        
  <>
             <div class="row">
            <div class="col-md-3 left_content">
                <h5 class="get_update">Get Updated</h5>
                <h1 class="latest_news">LATEST
                    NEWS&#10078;</h1>
            </div>
            <div class="col-md-3 middle_pics">
             <NewsImage></NewsImage>

            </div>
            <div class="col-md-5 right_lekha">
                <NewsInner></NewsInner>
            </div>
            
           </div>

           <div class="row button_div">
           <button type="button" class="button_read_blog btn btn-primary m-auto">READ our BLOG</button>
          </div>

          </>
    )
}

export default News;
