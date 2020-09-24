import React from "react"

interface LoginProps {
  username?: string;
}
export const Login: React.FC<LoginProps> = (props: LoginProps): React.ReactElement => {
  return (
    <div>
      <span>Username</span>
      <input type="text" aria-label="username-input" value={props.username}/>
      <span>Password</span>
      <input type="password" aria-label="password-input"/>
    </div>)
}
