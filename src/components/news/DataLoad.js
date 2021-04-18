import React, { useState, useEffect } from "react";
import NewsSingle from "../newsSingle/NewsSingle";
const DataLoad = () => {
 
  const [ data , setData] = useState([]);

  useEffect( ()=>{

    fetch('http://api.rmabd.org/latestnews')
    .then(res => res.json())
    .then(news => setData(news.slice(0,3)))
  console.log(data);
  }, [data])
  return (
    <>
      {data.map((newsSingle) => (
        <NewsSingle key={newsSingle.id} newsSingle={newsSingle}>

        </NewsSingle>
      ))}
    </>
  );
};

export default DataLoad;


