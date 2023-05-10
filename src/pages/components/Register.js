import Logo from "./Logo";
import Input from "./Input";
import Button from "./Button";
import RightLoginSide from "./RightLoginSide";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "@/firebase";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  async function signUp() {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (result.user != null) {
        window.location.href = "/";
      }
    } catch (error) {
      console.error(error.code, error.message);
    }
  }
  return (
    <div className="Register">
      <RightLoginSide />
      <Logo />
      <div className="form">
        <div className="form-cont">
          <div className="greet-div">
            <b>Registration</b>
            <br></br>
            <p>Please register</p>
          </div>
          <div className="f">
            <div className="log-cont">
              <Input
                text="Email"
                type="email"
                name="username"
                src="./img/login/hector.png"
                alt=""
                value={email}
                change={(e) => setEmail(e.target.value)}
              />
              <Input
                text="Password"
                type="password"
                name="password"
                src="./img/login/V4ector.png"
                alt=""
                value={password}
                change={(e) => setPassword(e.target.value)}
              ></Input>
            </div>
            <div className="reg-cont">
              <Button text="Register" click={signUp}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
