import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Styles from "../styles/components/Sidebar.module.scss";
import { MdMiscellaneousServices } from "react-icons/md";
import {
  AiOutlineHistory,
  AiOutlineLineChart,
  AiOutlineMail,
} from "react-icons/ai";
import { useQuery } from "react-query";
import { FiLogOut } from "react-icons/fi";
import { IoTicketOutline } from "react-icons/io5";

import {
  Avatar,
  Breadcrumb,
  Layout,
  Menu,
  Row,
  Badge,
  Dropdown,
  Space,
  Divider,
  DatePicker,
  message,
  Button,
} from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  DownOutlined,
  BellOutlined,
  HomeOutlined,
  AppstoreOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const navItems = [
  // getItem(<Link href="/startup">Dashboard</Link>, "/startup", <HomeOutlined />),
  getItem(
    <Link href="/superadmin">Dashboard</Link>,
    "/superadmin",
    <HomeOutlined />
  ),
  getItem(
    <Link href="/superadmin/blocking">Blocking History</Link>,
    "/superadmin/blocking",
    <AiOutlineHistory />
  ),
  getItem(
    <Link href="/superadmin/appeals">Appeals</Link>,
    "/superadmin/appeals",
    <IoTicketOutline />
  ),
  getItem(
    <Link href="/superadmin/country-overview">Country Overview</Link>,
    "/superadmin/country-overview",
    <AiOutlineLineChart />
  ),
];

const onLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  message.success("Logged out successfully");
  window.location.href = "/";
};

export default function DashboardLayout({ children, title }) {
  const [collapsed, setCollapsed] = useState(false);

  const router = useRouter();
  const { pathname } = router;
  const mainPath = pathname.split("/")[1];
  console.log(mainPath);

  // split the path with "/" and join it back to remove the "/"
  const path = pathname.split("/").join("/");
  console.log(path);

  // check if the path is the same as the link, the apply active style else apply inactive style
  const isActive = (link) => {
    if (link === path) {
      return Styles.active;
    } else {
      return Styles.inactive;
    }
  };
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <div className={Styles.sidebarItems}>
        <Sider
          width={250}
          collapsible
          collapsed={collapsed}
          breakpoint="xl"
          onCollapse={(value) => setCollapsed(value)}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            background: "#fff",
          }}
        >
          <div
            style={{
              height: 32,
              margin: 16,
              color: "#000",
              fontSize: "2rem",
              fontFamily: "Poppins",
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
              padding: "2rem 0",
              borderBottom: "1px solid #f0f0f0",
            }}
          >
            <Image
              src="/SwachhIcon.png"
              alt="logo"
              width={40}
              height={40}
              style={{
                // add a shadow
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                padding: "0.5rem",
                borderRadius: "5px",
              }}
            />
            {!collapsed && (
              <span
                style={{
                  marginLeft: "0.5rem",
                  fontSize: "1.4rem",
                  fontWeight: "500",
                  color: "#545454",
                }}
              >
                SwachhWeb
              </span>
            )}
          </div>

          <Menu
            defaultSelectedKeys={[path]}
            selectedKeys={[path]}
            defaultOpenKeys={[mainPath]}
            mode="inline"
            items={navItems}
          />
        </Sider>
      </div>
      <Layout className="site-layout">
        <Content
          style={{
            marginLeft: collapsed ? 80 : 250,
            color: "#000",
            background: "#F9F9FE",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 2rem",
            }}
          >
            <div className={Styles.dashTitle}>{title}</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Avatar
                size={40}
                style={{
                  marginRight: "0.5rem",
                }}
              />

              <FiLogOut
                size={20}
                style={{
                  marginLeft: "0.5rem",
                }}
                onClick={onLogout}
              />
            </div>
          </div>
          <div
            style={{
              padding: 20,
              display: "flex",
              flexDirection: "column",
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
