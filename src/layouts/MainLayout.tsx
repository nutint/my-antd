import React from "react"
import { Breadcrumb, Layout } from "antd"
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom"
import { SideMenu } from "./components/SideMenu"
import { LogCreate } from "../screens/log-create/LogCreate"
import { Dashboard } from "../screens/dashboard/Dashboard"

const { Header, Sider, Content } = Layout

export const MainLayout: React.FC = (): React.ReactElement => {
  const menuItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Create Logs", path: "/log-create" },
    { label: "Users", path: "/users" },
    { label: "About", path: "/about" }
  ]
  return <Router>
    <Layout>
      <Header className="header">
        <div className="logo">
          Hello
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <SideMenu items={menuItems}/>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >

            <Switch>
              <Route path="/dashboard">
                <Dashboard/>
              </Route>
              <Route path="/log-create">
                <LogCreate />
              </Route>

              <Route path="/about">
                About
              </Route>

              <Route path="/other">
                Other
              </Route>

            </Switch>

          </Content>
        </Layout>
      </Layout>
    </Layout>
  </Router>
}
