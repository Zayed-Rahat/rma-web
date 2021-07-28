import React from "react";

const NewsCreateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
}) => {
  // destructure
  const {
    title,
    paragragh,
    images
  
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={paragragh}
          onChange={handleChange}
        />
      </div>

      <br />
      <button className="btn btn-outline-info" style={{fontSize: 14  }}>Save</button>
    </form>
  );
};

export default NewsCreateForm;
