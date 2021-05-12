import React, { useState, useEffect } from "react";
import NewsReadBlog from "./NewsReadBlog";

const DataLoadReadBlog = () => {
 
  const [ read , setRead] = useState([]);

  useEffect( ()=>{

    fetch('http://api.rmabd.org/latestnews')
    .then(response => response.json())
    .then(newS => setRead(newS.slice(0,4)))
  console.log(read);
  }, [read])
  return (
    <>
      {read.map((newsRead) => (
        <NewsReadBlog key={newsRead.id} newsRead={newsRead}>

        </NewsReadBlog>
      ))}
    </>
  );
};

export default DataLoadReadBlog;


