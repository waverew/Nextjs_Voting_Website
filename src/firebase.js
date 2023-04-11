import { initializeApp } from "firebase/app";

import { getDatabase } from 'firebase/database';
const firebaseConfig = {
  apiKey: "AIzaSyAV2YEUGNiJbPs4brtrHaQPNZ-ZBbkVqeE",
  authDomain: "landing-ece2b.firebaseapp.com",
  projectId: "landing-ece2b",
  storageBucket: "landing-ece2b.appspot.com",
  messagingSenderId: "663448782267",
  appId: "1:663448782267:web:82338ed5f46a95020ff09e"
};
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)



  export default firebaseConfig;