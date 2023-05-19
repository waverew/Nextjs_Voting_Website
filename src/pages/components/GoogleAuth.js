import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase";
import { FcGoogle } from "react-icons/fc";
import Button from "./Button";
const SignIn = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  async function signIn() {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (error) {
      console.error(error.code, error.message);
    }
  }
  return (
    <div className="google-auth">
      <button className="google-auth-button" onClick={signIn}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="Google sign-in"
        />
        Sign in with Google
      </button>
    </div>
  );
};
export default SignIn;
