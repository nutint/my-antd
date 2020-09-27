import { render } from "@testing-library/react"
import React from "react"
import { LogTypeInput } from "./LogTypeInput"

describe("LogTypeInput", () => {
  const renderResult = render(<LogTypeInput />)

  it("should render logTypes correctly", () => {
    expect(renderResult.getByText("Phone Thai")).toBeInTheDocument()
    expect(renderResult.getByText("Facebook Message")).toBeInTheDocument()
    expect(renderResult.getByText("None")).toBeInTheDocument()
  })
})
