import React, { useEffect, useState } from "react";
import { getNewsByCount } from "../../../functions/NewAdd";
import { removeNews } from "../../../functions/NewAdd";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import AdminNewsCard from "../../cards/AdminNewsCard";
import AdminNav from "../../nav/AdminNav";
import Header from "../../nav/Header";

const AllNews = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  // redux
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = () => {
    setLoading(true);
    getNewsByCount(100)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleRemove = (slug) => {
    // let answer = window.confirm("Delete?");
    if (window.confirm("Delete?")) {
      // console.log("send delete request", slug);
      removeNews(slug, user.token)
        .then((res) => {
          loadAllProducts();
          toast.error(`${res.data.title} is deleted`);
        })
        .catch((err) => {
          if (err.response.status === 400) toast.error(err.response.data);
          console.log(err);
        });
    }
  };

  return (
    <>
    <Header/>

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4 style={{fontSize: 50  }}>All News</h4>
          )}
          <div className="row">
            {products.map((product) => (
              <div key={product._id} className="col-md-4 pb-3">
                <AdminNewsCard
                  product={product}
                  handleRemove={handleRemove}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AllNews;
