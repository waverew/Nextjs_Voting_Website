import { useState, useEffect } from "react";
import { app } from "../../firebase";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email, password) => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const signOut = async () => {
    await firebase.auth().signOut();
  };

  return {
    user,
    loading,
    signIn,
    signOut,
  };
};

export default useAuth;
