import React, {useState} from "react"
import { Row, Col, Radio } from "antd"

enum LogType {
  PhoneThai = "PhoneThai",
  FacebookMsg = "FacebookMsg",
  None = "None"
}

export const LogCreate: React.FC = (): React.ReactElement => {
  const [logType, setLogType] = useState<LogType>(LogType.None)

  return <div>
    <Row gutter={{ xs: 8, sm: 16 }}>
      <Col span={4}>
        Log Type
      </Col>
      <Col span={12}>
        <Radio.Group onChange={
          (newValue) => {
            console.log(`newLogType = ${newValue.target.value}`)
            setLogType(newValue.target.value)
          }
        } value={logType}>
          {
            [ LogType.PhoneThai, LogType.FacebookMsg, LogType.None ]
              .map((logTypeOption, index) =>
                (<Radio key={index} value={logTypeOption}>{ logTypeOption }</Radio> )
              )
          }
        </Radio.Group>
      </Col>
    </Row>
  </div>
}
