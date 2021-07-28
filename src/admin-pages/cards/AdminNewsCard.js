import React from "react";
import { Card } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Meta } = Card;

const AdminNewsCard = ({ news, handleRemove }) => {
  // destructure
  const { title , paragragh , images , id } = news;

  return (
    <Card
      cover={
        <img
          src={images && images.length ? images[0].url : "Not Availavble"}
          style={{ height: "150px", objectFit: "cover" }}
          className="p-1" alt=""
        />
      }
      actions={[
        <Link to={`/admin/latestnews/${id}`}>
          <EditOutlined className="text-warning" />
        </Link>,
        <DeleteOutlined
          onClick={() => handleRemove(id)}
          className="text-danger"
        />,
      ]}
    >
      <Meta
        title={title}
        paragragh={`${paragragh && paragragh.substring(0, 40)}...`}
      />
    </Card>
  );
};

export default AdminNewsCard;
