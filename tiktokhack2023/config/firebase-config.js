import { initializeApp } from "firebase/app";

const firebaseConfig = JSON.parse(process.env.EXPO_PUBLIC_Config);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
