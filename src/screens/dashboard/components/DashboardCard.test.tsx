import React from "react"
import { render } from "@testing-library/react"
import { DashboardCard } from "./DashboardCard"

describe("DashboardCard", () => {

  it("should render CardContent correctly", () => {
    const renderResult = render(<DashboardCard
      caption="Card Content"
      value="1"
    />)

    expect(renderResult.getByText("Card Content")).toBeInTheDocument()
  })

  it("should render value", () => {
    const renderResult = render(<DashboardCard
      caption="Card Content"
      value="1"
    />)

    expect(renderResult.getByText("1")).toBeInTheDocument()
  })
})
