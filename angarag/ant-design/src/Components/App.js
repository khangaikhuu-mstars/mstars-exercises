import { Layout, Menu}  from "antd";
import React from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import "../index.css";
import Tables from './Tables'
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { NavLink, Route } from "react-router-dom";
import HeaderButton from "./AddUser"

const { Header, Sider, Content } = Layout;
class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <BrowserRouter>
      <Layout id="components-layout-demo-custom-trigger">
        <Sider collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <NavLink exact to="/users-list">
              <Route exact path={"/users-list"}>
              </Route>
              Users
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              Videos
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <HeaderButton/>
            <Tables/>
          </Content>
        </Layout>
      </Layout>
      </BrowserRouter>
    );
  }
}


export default SiderDemo;