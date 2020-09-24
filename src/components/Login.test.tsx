import { render } from "@testing-library/react"
import { Login } from "./Login"
import React from "react"

describe("Login", () => {
  it("should render username text", () => {
    const { getByText } = render(<Login />)

    expect(getByText("Username")).toBeInTheDocument()
  })

  it("should prefill username when specify prop username", () => {
    const { getByLabelText } = render(<Login username={"myname"} />)

    expect(getByLabelText("username-input").value).toEqual("myname")
  })
})
