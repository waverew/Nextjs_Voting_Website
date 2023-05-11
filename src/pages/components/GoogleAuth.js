import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import {app} from "../../firebase"
import {FcGoogle} from 'react-icons/fc';
import Button from "./Button";
const SignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    async function signIn(){
        try{
            const result = await signInWithPopup(auth, provider);
      console.log(result.user);
        } catch (error){
            console.error(error.code, error.message);
        }
    }
return (
    <div>
        <Button click={signIn} style={{display:"flex", height:"100%", alignItems:"center", justifyContent:"center"}} text={<FcGoogle/>}></Button>
    </div>
)
}
export default SignIn