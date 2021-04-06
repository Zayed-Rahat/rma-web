import React from "react";
import "./NewsSingle.css";

const NewsSingle = ({ newsSingle }) => {
  return (
    <div className="row">
      <div class="col-md-3">
        <img className="ProductImg" src={newsSingle.Url} alt="" />
      </div>
      <div class="rigth_lekha_margin mb-4 col-md-9">
        <h2 className="arduino1">{newsSingle.Title}</h2>
        <p className="arduino">{newsSingle.Body}</p>
      </div>
    </div>
  );
};

export default NewsSingle;
