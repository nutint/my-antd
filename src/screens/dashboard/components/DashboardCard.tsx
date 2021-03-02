import React from "react"
import { Card } from "antd"

interface Props {
  caption: string;
  value: string;
}

export const DashboardCard: React.FC<Props> = (props: Props): React.ReactElement => {
  return <div>
    <Card>
      <p>{ props.value }</p>
      <p>{ props.caption }</p>
    </Card>
  </div>
}
