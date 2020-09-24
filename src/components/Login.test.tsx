import { render } from "@testing-library/react"
import { Login } from "./Login"
import React from "react"

describe("Login", () => {
  describe("rendering condition", () => {
    it("should render username and password text", () => {
      const { getByText } = render(<Login />)

      expect(getByText("Username")).toBeInTheDocument()
      expect(getByText("Password")).toBeInTheDocument()
    })

    it("should prefill username when specify prop username", () => {
      const { getByLabelText } = render(<Login username={"myname"} />)

      expect(getByLabelText("username-input").value).toEqual("myname")
    })

    it("should have password field", () => {
      const { getByLabelText } = render(<Login />)

      expect(getByLabelText("password-input").props.type).toEqual("password")
    })
  })

  describe("clicking login", () => {
    it.todo("callback when click login")
    it.todo("error when input incorrect username(email)")
    it.todo("error when username is empty")
    it.todo("error when password is empty")
  })
})
