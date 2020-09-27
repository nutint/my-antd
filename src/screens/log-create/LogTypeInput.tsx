import React, { useState } from "react"
import { Radio } from "antd"
import { LogType } from "./models/LogType"

const logTypeToText = (logType: LogType) => {
  switch (logType) {
  case LogType.PhoneThai:
    return "Phone Thai"
  case LogType.FacebookMsg:
    return "Facebook Message"
  default:
    return "None"
  }
}

export const LogTypeInput: React.FC = (): React.ReactElement => {
  const [logType, setLogType] = useState<LogType>(LogType.None)
  return <Radio.Group onChange={
    (newValue) => {
      console.log(`newLogType = ${newValue.target.value}`)
      setLogType(newValue.target.value)
    }
  } value={logType}>
    {
      [LogType.PhoneThai, LogType.FacebookMsg, LogType.None]
        .map((logTypeOption, index) =>
          (<Radio key={ index } value={ logTypeOption }>{ logTypeToText(logTypeOption) }</Radio>)
        )
    }
  </Radio.Group>
}
