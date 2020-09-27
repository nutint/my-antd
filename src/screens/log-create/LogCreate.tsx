import React from "react"
import { Col, Row } from "antd"
import { LogTypeInput } from "./LogTypeInput"

export const LogCreate: React.FC = (): React.ReactElement => {
  return <div>
    <Row gutter={{ xs: 8, sm: 16 }}>
      <Col span={4}>
        Log Type
      </Col>
      <Col span={12}>
        <LogTypeInput />
      </Col>
    </Row>
  </div>
}
