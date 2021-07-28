import { getNews, updateNews } from "../../../functions/NewAdd";
import React, { useState, useEffect } from "react";
import AdminNav from "../../nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import FileUpload from "../../forms/FileUpload";
import { LoadingOutlined } from "@ant-design/icons";
import Header from "../../nav/Header";
import NewsUpdateForm from '../../forms/NewsUpdateForm'
const initialState = {
  title: "",
  description: "",
  images: [],
  
};

const NewsUpdate = ({ match, history }) => {
  // state
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));
  // router
  const { slug } = match.params;

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = () => {
    getNews(slug).then((p) => {
      setValues({ ...values, ...p.data });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    updateNews(slug, values, user.token)
      .then((res) => {
        setLoading(false);
        toast.success(`"${res.data.title}" is updated`);
        history.push("/admin/news");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(err.response.data.err);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  
    // if user clicks back to the original category
    // show its sub categories in default
    if ( e.target.value) {
      loadNews();
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

        <div className="col-md-10">
          {loading ? (
            <LoadingOutlined className="text-danger h1" />
          ) : (
            <h4 style={{fontSize: 20  }}>News update</h4>
          )}

          {/* {JSON.stringify(values)} */}

          <div className="p-3">
            <FileUpload
              values={values}
              setValues={setValues}
              setLoading={setLoading}
            />
          </div>

          <NewsUpdateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setValues={setValues}
            values={values}

          />
          <hr />
        </div>
      </div>
    </div>

    </>
  );
};

export default NewsUpdate;
