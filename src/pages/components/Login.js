
import RightLoginSide from "./RightLoginSide";
import Button from "./Button";
import Input from "./Input";
import Logo from "./Logo";
const Login = () => {
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
              console.log("hi");
            }}
            className="f"
          >
            <div className="log-cont">
              <Input
                text="Username"
                type="email"
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
          <Button func={() => {window.location.href="/dashboard"}}/>
        </div>
      </div>
    </div>
  );
};
export default Login;