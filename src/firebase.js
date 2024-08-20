import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyAwdpqCfMrLedJ4tSggqi9sb8ZS_8SsTxw",
  authDomain: "webapp-e252e.firebaseapp.com",
  projectId: "webapp-e252e",
  storageBucket: "webapp-e252e.appspot.com",
  messagingSenderId: "207705521320",
  appId: "1:207705521320:web:6b74902972a30b92dad69d",
  measurementId: "G-YEKQ0PB2WG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app); // Initialize and export Firebase Storage
