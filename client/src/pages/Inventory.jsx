import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../api";

const Inventory = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setData(res.products);
    });
    setLoading(false)
  });
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
            render: (value)=><span>${value}</span>
          },
          {
            title: "Price",
            dataIndex: "price",
          },
          {
            title: "Rating",
            dataIndex: "rating",
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
          },
          {
            title: "Brand",
            dataIndex: "brand",
          },
          {
            title: "Category",
            dataIndex: "category",
          },
        ]}
        dataSource={data}
        loading={loading}
      ></Table>
    </Space>
  );
};

export default Inventory;
