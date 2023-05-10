import RightLoginSide from "./RightLoginSide";
import Button from "./Button";
import Input from "./Input";
import Logo from "./Logo";
import SignIn from "./GoogleAuth";
import { useState } from "react";
import EmailAuth from "./EmailAuth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div className="Login">
      <RightLoginSide></RightLoginSide>
      <Logo></Logo>
      <div className="form">
        <div className="form-cont">
          <div className="greet-div">
            <b>Welcome back</b>
            <br></br>
            <p>Login to your account</p>
          </div>
          <form
            onSubmit={() => {
              console.log("a");
            }}
            action="http://localhost:3000/api/login"
            className="f"
            method="post"
            target="_self"
          >
            <div className="log-cont">
              <Input
                text="Username"
                type="text"
                name="username"
                src="./img/login/hector.png"
                alt=""
              />
              <Input
                text="Password"
                type="password"
                name="password"
                src="./img/login/V4ector.png"
                alt=""
              ></Input>
            </div>
            <div className="inp-cont">
              <div>
                <input type="checkbox"></input>
                <label>Remember me</label>
              </div>
              <Button text="Login" type="submit"></Button>
            </div>
          </form>
          <div className="reg-cont">
            <Button
              func={() => {
                window.location.href = "/register";
              }}
              text="Register"
            />
          </div>
          <SignIn></SignIn>
          <EmailAuth></EmailAuth>
        </div>
      </div>
    </div>
  );
};
export default Login;
