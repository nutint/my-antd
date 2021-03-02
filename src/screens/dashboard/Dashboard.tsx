import React from "react"
import { Col, Row } from "antd"
import { DashboardCard } from "./components/DashboardCard"

export const Dashboard: React.FC = (): React.ReactElement => {
  return <div>
    <Row gutter={{ xs: 8, sm: 16 }}>
      <Col span="4">
        <DashboardCard caption="Total Cookies" value="9"/>
      </Col>
      <Col span="4">
        <DashboardCard caption="Total Scripts" value="1"/>
      </Col>
      <Col span="4">
        <DashboardCard caption="Total Categories" value="5"/>
      </Col>
      <Col span="4">
        <DashboardCard caption="Unknown" value="0"/>
      </Col>
    </Row>
  </div>
}

