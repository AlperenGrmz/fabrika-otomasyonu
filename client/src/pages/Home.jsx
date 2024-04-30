import { Card, Space, Statistic, Table, Typography, Spin } from "antd";
import {
  ShoppingCartOutlined,
  ShoppingOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getOrders } from "../api";




const Home = () => {

  return (
    <Space size={22} direction="vertical">
      <Typography.Title level={4}>Home</Typography.Title>
      <Space direction="horizontal">
        <HomeCard
          icon={
            <ShoppingCartOutlined
              style={{
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Orders"}
          value={123}
        />
        <HomeCard
          icon={
            <ShoppingOutlined
              style={{
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Inventory"}
          value={123}
        />
        <HomeCard
          icon={
            <UserOutlined
              style={{
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Customer"}
          value={123}
        />
        <HomeCard
          icon={
            <TeamOutlined
              style={{
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Employeer"}
          value={123}
        />
      </Space>
      <Space>
        <RecentOrder/>
      </Space>
    </Space>
  );
};

const HomeCard = ({ title, value, icon }) => {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
};

const RecentOrder = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getOrders().then((res) => {
            setData(res.products);
            setLoading(false)
        })
    },[])

    return(
        <>
        <Typography.Text>Recent Orders</Typography.Text>
        <Table 
        columns={[
            {
                title:"Title",
                dataIndex:"title"
            },
            {
                title:"Quantity",
                dataIndex:"quantity"
            },
            {
                title:"Price",
                dataIndex:"discountedPrice"
            },
            {
                title: "Action",
                render: (data) => {
                    console.log("data: ",data);
                return <a>Edit</a>}

            }
        ]}
        loading={loading}
        dataSource={data}
        pagination={false}
        ></Table>
        </>
    )
}

export default Home;
