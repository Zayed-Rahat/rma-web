import React, {  } from "react";
import NewsReadBlog from "./NewsReadBlog";

const DataLoadReadBlog = ({read}) => {

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


