// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDN3qiXKxasJzGLs6uybYnsJRZYWhXjBm8",
  authDomain: "projekt-gr03.firebaseapp.com",
  projectId: "projekt-gr03",
  storageBucket: "projekt-gr03.appspot.com",
  messagingSenderId: "805011767201",
  appId: "1:805011767201:web:31bdd0b0c356fdba6595e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
