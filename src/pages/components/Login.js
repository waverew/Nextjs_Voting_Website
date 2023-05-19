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
          <EmailAuth></EmailAuth>
          <div className="reg-cont">
            <SignIn></SignIn>
            <Button
              click={() => {
                window.location.href = "/register";
              }}
              text="Register"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
