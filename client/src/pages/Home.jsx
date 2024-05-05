import React from "react";
import DataCard from "../components/DataCard";
import getData from "../hooks/getData";
import {
  ShopOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Col, Row, theme } from "antd";

const Home = () => {
  const employeerData = getData("employeer");
  const customerData = getData("customer");
  const orderData = getData("order");
  const {
    token: { blue6, orange6, purple6 },
  } = theme.useToken();

  const statisticData = [
    {
      title: "Toplam Çalışan",
      value: employeerData.data.length,
      icon: UserOutlined,
      color: blue6,
    },
    {
      title: "Toplam Müşteri",
      value: customerData.data.length,
      icon: UsergroupAddOutlined,
      color: orange6,
    },
    {
      title: "Toplam Sipariş",
      value: orderData.data.length,
      icon: ShopOutlined,
      color: purple6,
    },
  ];

  return (
    <Row gutter={[10, 10]}>
      {statisticData.map((item, key) => {
        return (
          <Col key={key} lg={8} xs={24}>
            <DataCard
              color={item.color}
              icon={item.icon}
              title={item.title}
              value={item.value}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default Home;
