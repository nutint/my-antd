import React from "react"
import { Col, Row } from "antd"
import { DashboardCard } from "./components/DashboardCard"

export const Dashboard: React.FC = (): React.ReactElement => {
  return <div>
    <Row gutter={{ xs: 8, sm: 16 }}>
      <Col span="4">
        <DashboardCard/>
      </Col>
      <Col span="4">
        <DashboardCard/>
      </Col>
      <Col span="4">
        <DashboardCard/>
      </Col>
      <Col span="4">
        <DashboardCard/>
      </Col>
    </Row>
  </div>
}

