import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { Layout, Menu } from "antd";
import {
  GiftOutlined,
  FireOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

const navItems = [
  {
    icon: <DashboardOutlined />,
    title: "Dashboard",
    to: "/",
  },
  {
    icon: <GiftOutlined />,
    title: "Test",
    to: "/test",
  },
];

const { Sider } = Layout;

const StyledMenu = styled(Menu)`
  .ant-menu-item-selected {
    background-color: white !important;
    &:after {
      display: none;
    }
  }

  .ant-menu-item {
    padding: 0 !important;
    height: 32px;
    line-height: 32px;
  }

  > .ant-menu-item {
    > a {
      padding-left: ${(props) => (props.collapsed ? "16px" : "8px")};
    }
  }

  .ant-menu-item-active > a,
  .ant-menu-item-selected > a {
    background-color: #eee;
    color: var(--primary);
    transition: all 0.3s;
  }
`;

export default function SiderMenu({ collapsed, pathname }) {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme="light"
      className="sidebar-layout"
      collapsedWidth={56}
    >
      <StyledMenu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["/"]}
        selectedKeys={[pathname]}
        // className="mt-5 border-none px-4"
      >
        {navItems.map(({ icon, title, to }) => (
          <StyledMenu.Item key={to} className="custom-anticon">
            <Link to={to}>
              {icon}
              <span>{title}</span>
            </Link>
          </StyledMenu.Item>
        ))}
      </StyledMenu>
    </Sider>
  );
}
