import React from "react"
import { Menu } from "antd"
import { Link } from "react-router-dom"

interface MenuItem {
  label: string;
  path: string;
}

interface Props {
  items: MenuItem[]
}

export const SideMenu: React.FC<Props> = ({ items }: Props): React.ReactElement => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%", borderRight: 0 }}
    >
      {
        items.map(({ label, path }, index) => (
          <Menu.Item key={index}>
            <Link to={path}>{label}</Link>
          </Menu.Item>
        ))
      }
    </Menu>
  )
}
