import React, { Component } from 'react';
import { Layout } from 'antd';
// const { Header, Footer, Sider, Content } = Layout;

export default class BlankLayout extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }} className="ant-layout">
        {this.props.children}
      </Layout>
    );
  }
}
