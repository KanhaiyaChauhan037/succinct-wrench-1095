
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC0duDr5B6ZFlODaQjLDloADV-MmiHbiA0",
  authDomain: "white-feather-login.firebaseapp.com",
  projectId: "white-feather-login",
  storageBucket: "white-feather-login.appspot.com",
  messagingSenderId: "65165422404",
  appId: "1:65165422404:web:6c8cfc7d20992cb3077111"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app