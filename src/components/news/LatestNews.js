import React, { useEffect, useState } from 'react';

const LatestNews = () => {
    
    const [latestNews,setlatestNews] = useState([]);
    useEffect( () => {

        fetch('https://api.rmabd.org/latestnews')
      .then( res => res.json())
        .then( data => setlatestNews(data))
      /*   console.log(latestNews) */
    },[latestNews])
    return (
        <div>
            {latestNews.map(latestNews=>(
               <h1>

                 {latestNews.title} 
            </h1> 
            ))}
            
        </div>
    );
};

export default LatestNews;