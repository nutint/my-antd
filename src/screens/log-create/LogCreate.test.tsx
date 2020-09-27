import { render } from "@testing-library/react"
import { LogCreate } from "./LogCreate"
import React from "react"

describe("LogCreate", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    })
  })

  it("should render log type input", () => {
    const renderResult = render(<LogCreate />)

    expect(renderResult.getByText("Log Type")).toBeInTheDocument()
  })
})
