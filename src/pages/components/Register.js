import Logo from "./Logo";
import Input from "./Input";
import Button from "./Button";
import RightLoginSide from "./RightLoginSide";
const Register = () => {
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
          <form
            onSubmit={() => {
              console.log("a");
            }}
            action="http://localhost:3000/api/register"
            className="f"
            method="post"
            target="_self"
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
              <Input
                text="Name"
                type="text"
                name="name"
                src="./img/login/V4ector.png"
                alt=""
              />
            </div>
            <div className="inp-cont">
              <Button text="Register" type="submit"></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
