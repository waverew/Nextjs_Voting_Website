import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import {app} from "../../firebase"
import {FcGoogle} from 'react-icons/fc';
const SignIn = () => {
    const provider = new GoogleAuthProvider;
    const auth = getAuth(app);
    async function signIn(){
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    }
return (
    <div>
        <button onClick={signIn} style={{display:"flex", alignItems:"center"}}><FcGoogle/> signin</button>
    </div>
)
}
export default SignIn