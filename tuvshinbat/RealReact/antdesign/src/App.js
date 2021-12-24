import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;
const onSearch = value => console.log(value);
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
class App  extends React.Component {
  state = {
    collapsed:false,
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Search placeholder="search" onSearch={onSearch} style={{ width: 200 }} />
        
            <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Videos">
              <Menu.Item key="6">Video 1</Menu.Item>
              <Menu.Item key="8">Video 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              
            </Breadcrumb>
           
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}
 


export default App;
