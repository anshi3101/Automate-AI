
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "automate-ai-eeca0.firebaseapp.com",
  projectId: "automate-ai-eeca0",
  storageBucket: "automate-ai-eeca0.firebasestorage.app",
  messagingSenderId: "443298269331",
  appId: "1:443298269331:web:2c0ac426e7ecfc17fa6566"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app) //auth chahiyejb google se sign in karwayege
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});