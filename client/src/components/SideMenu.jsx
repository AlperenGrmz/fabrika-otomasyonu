import { Menu } from "antd";
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  TeamOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate()
  return (
    <Menu
      style={{
        height:"100%"
      }}
      onClick={(item)=>{
        navigate(item.key)
      }}
      items={[
        {
          label: "Dashboard",
          icon: <AppstoreOutlined/>,
          key: "/dashboard",
        },
        {
          label: "Employee",
          icon: <TeamOutlined/>,
          key: "/dashboard/employee",
        },
        {
          label: "Inventory",
          icon:<ShopOutlined/>,
          key: "/dashboard/inventory",
        },
        {
          label: "Orders",
          icon:<ShoppingCartOutlined/>,
          key: "/dashboard/orders",
        },
        {
          label: "Customers",
          icon:<UserOutlined/>,
          key: "/dashboard/customers",
        }
      ]}
    />
  );
};

export default SideMenu;
