import React, { useState } from "react";
import { newsLoad } from "../news/NewsLoad";
import NewsSingle from "../newsSingle/NewsSingle";
const DataLoad = () => {
  const [news] = useState(newsLoad);
  console.log(news);
  return (
    <>
      {news.map((newsSingle) => (
        <NewsSingle newsSingle={newsSingle}></NewsSingle>
      ))}
    </>
  );
};

export default DataLoad;