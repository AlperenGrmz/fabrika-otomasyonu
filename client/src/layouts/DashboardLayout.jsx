import {
  Avatar,
  Button,
  Drawer,
  Dropdown,
  Layout,
  Menu,
  Space,
  theme,
  Typography,
} from "antd";
import {
  UserOutlined,
  DownOutlined,
  HomeOutlined,
  TeamOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./layout.css";
import useScreenSize from "../hooks/useScreenSize";

const { Header, Content, Sider } = Layout;
const { Text } = Typography;

const DashboardLayout = () => {
  const screenSize = useScreenSize()
  const location = useLocation();
  const navigate = useNavigate();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [SideMenuOpen, setSideMenuOpen] = useState(false);
  const {
    token: {  colorBgContainer },
  } = theme.useToken();

  const showDrawer = () => {
    setOpenMobileMenu(true);
  };
  const onClose = () => {
    setOpenMobileMenu(false);
  }

  const headerStyle = {
    height: 80,
    width: "100vw",
    position: "relative",
    zIndex: 99,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const items = [
    {
      label: <a>Çıkış Yap</a>,
      key: "0",
      danger: true,
    },
  ];

  const menuItems = [
    {
      key: "/dashboard",
      label: "Home",
      onClick: () => navigate("/dashboard"),
      icon: <HomeOutlined />,
    },
    {
      key: "/dashboard/employee",
      label: "Employer",
      onClick: () => navigate("/dashboard/employee"),
      icon: <TeamOutlined />,
    },
    {
      key: "/dashboard/inventory",
      label: "Inventory",
      onClick: () => navigate("/dashboard/inventory"),
      icon: <ShopOutlined />,
    },
    {
      key: "/dashboard/orders",
      label: "Orders",
      onClick: () => navigate("/dashboard/orders"),
      icon: <ShoppingCartOutlined />,
    },
    {
      key: "/dashboard/customers",
      onClick: () => navigate("/dashboard/customers"),
      label: "Customers",
      icon: <UserOutlined />,
    },
  ];

  return (
    <Layout>
      <Header style={{ ...headerStyle, backgroundColor: colorBgContainer }}>
        <div>
          <Button type="default" shape="default" onClick={() => {
            screenSize.width <= 992 ? showDrawer() : setSideMenuOpen((prev) => !prev);
          }} icon={<MenuOutlined />} />
        </div>
        <div></div>
        <div style={{}}>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Avatar
                style={{
                  cursor: "pointer",
                }}
                size={32}
                icon={<UserOutlined />}
              />
              <Text
                style={{
                  cursor: "pointer",
                }}
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  User Name
                  <DownOutlined />
                </Space>
              </Text>
            </div>
          </Dropdown>
        </div>
      </Header>
      <Layout>
        <Sider className="sidebar" theme="light" collapsed={SideMenuOpen} collapsedWidth={80} style={{}}>
          <Menu
            mode="inline"
            style={{ marginTop: 30, textAlign: "left" }}
            items={menuItems}
            selectedKeys={location.pathname}
          />
        </Sider>
        <Content style={{
          margin: '24px 16px',
          background: colorBgContainer,
          padding: 20,
          overflowY: "auto",
        }}>
          <div>
            <Outlet />
          </div>
        </Content>
      </Layout>
      <Drawer 
      width={"50%"}
      title={"Menu"}
      placement="left"
      onClose={onClose}
      open={openMobileMenu}
      >
        <Menu 
        mode="inline"
        items={menuItems}
        />
      </Drawer>
    </Layout>
  );
};

export default DashboardLayout;