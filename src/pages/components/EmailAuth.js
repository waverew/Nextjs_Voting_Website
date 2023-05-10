import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebase';
import { useState } from 'react';

const EmailAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth(app);

  async function signIn() {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result.user);
    } catch (error) {
      console.error(error.code, error.message);
    }
  }

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default EmailAuth;
