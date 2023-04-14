import Logo from "./Logo";
import Input from "./Input";
const Register = () => {
  return (
    <div className="Register">
      <Logo />
      <form
        className="register-form"
        action="http://localhost:3000/api/register"
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
              <Input text="Name"
              type="text"
              name="name"
              src="./img/login/V4ector.png"
              alt=""
              ></Input>
            </div>
      </form>
    </div>
  );
};
export default Register;
