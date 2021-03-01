import {
  atom,
  RecoilRoot,
  selector,
  useRecoilState,
  useRecoilValue
} from "recoil"
import React, { ChangeEvent } from "react"

const textState = atom({
  key: "textState",
  default: ""
})

const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState)
    return text.length
  }
})

const TextInput = () => {
  const [text, setText] = useRecoilState(textState)

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setText(evt.target.value)
  }
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  )
}

const CharacterCount = () => {
  const count = useRecoilValue(charCountState)
  return <>Character Count: {count}</>
}

const CharCounter = () => {
  return <>
    <TextInput/>
    <CharacterCount/>
  </>
}
const App = () => (
  <RecoilRoot>
    <CharCounter/>
  </RecoilRoot>
)

export default App
