import React, { useState, useEffect } from "react";
import AdminNav from "../../nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createNews } from "../../../functions/NewAdd";
import NewsCreateForm from "../../forms/NewsCreateForm";
import FileUpload from "../../forms/FileUpload";
import { LoadingOutlined } from "@ant-design/icons";
import Header from "../../nav/Header";

const initialState = {
  title: "Headline",
  description: "News Details",
  images: [
  ],
  
};

const NewsCreate = () => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);

  // redux
  const { user } = useSelector((state) => ({ ...state }));

  const handleSubmit = (e) => {
    e.preventDefault();
    createNews(values, user.token)
      .then((res) => {
        console.log(res);
        window.alert(`"${res.data.title}" is created`);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        // if (err.response.status === 400) toast.error(err.response.data);
        toast.error(err.response.data.err);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
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
            <h4 style={{fontSize: 20  }}>News create</h4>
          )}
          <hr />

          {/* {JSON.stringify(values.images)} */}

          <div className="p-3">
            <FileUpload
              values={values}
              setValues={setValues}
              setLoading={setLoading}
            />
          </div>

          <NewsCreateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setValues={setValues}
            values={values}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default NewsCreate;
