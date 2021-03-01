import React from "react"
import { render } from "@testing-library/react"
import { DashboardCard } from "./DashboardCard"

describe("DashboardCard", () => {
  it("should render CardContent correctly", () => {
    const renderResult = render(<DashboardCard/>)

    expect(renderResult.getByText("Card Content")).toBeInTheDocument()
  })
})
