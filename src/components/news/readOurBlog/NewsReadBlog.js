import React from 'react'

function NewsReadBlog(props) {

  const {image,title,paragraph} = props.newsRead;


    return (
        <div>
                
                <article>
                <img src={image} alt=""/>

                    <div>
                        <h2>{title}</h2>

                        <p> {paragraph}</p>

                        <h5>Date...</h5>
                    </div>
                </article>
            
        </div>
    )
}

export default NewsReadBlog;
