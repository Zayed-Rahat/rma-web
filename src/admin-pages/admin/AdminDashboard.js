import React, { useEffect, useState } from "react";
import AdminNav from "../nav/AdminNav";
import { getNewsByCount } from "../../functions/NewAdd";
import AdminNewsCard from "../cards/AdminNewsCard";
import Header from "../nav/Header";
const AdminDashboard = () => {
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllNews();
  }, []);

  const loadAllNews = () => {
    setLoading(true);
    getNewsByCount(100)
      .then((res) => {
        setAllNews(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
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
            <h4 style={{fontSize: 20  }}>All News</h4>
          )}
          <div className="row">
            {allNews.map((news) => (
              <div key={news._id} className="col-md-4">
                <AdminNewsCard news={news} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default AdminDashboard;
