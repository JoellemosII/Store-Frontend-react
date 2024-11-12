
import { initializeApp } from "firebase/app";
import {getFirestore} from"firebase/firestore";

const firebaseConfig = {
apiKey: import.meta.env.VITE_API_KEY,
authDomain: import.meta.env.VITE_AUTH,
projectId: import.meta.env.VITE_PROJECT_ID,
storageBucket: import.meta.env.VITE_STORAGE,
messagingSenderId: import.meta.env.VITE_MSG,
appId: import.meta.env.VITE_API_ID,
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)