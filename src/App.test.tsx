import React from "react"
import { render } from "@testing-library/react"
import App from "./App"
import { Col, Row } from "antd"

describe("App", () => {
  test("should be able to render", () => {
    render(<App />)
  })
})
