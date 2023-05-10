import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
const EmailAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);

  async function signIn() {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error.code, error.message);
    }
  }

  return (
    <div>
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
      <div className="inp-cont">
        <div>
          <input type="checkbox"></input>
          <label>Remember me</label>
        </div>
        <Button text="Login" type="submit" click={signIn}></Button>
      </div>
    </div>
  );
};

export default EmailAuth;
