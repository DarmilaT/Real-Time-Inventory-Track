import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwcsEt8BKiL5Tg_W8gjLY1Zz06guiR9Bc",
  authDomain: "real-time-inventory-tracker.firebaseapp.com",
  projectId: "real-time-inventory-tracker",
  storageBucket: "real-time-inventory-tracker.firebasestorage.app",
  messagingSenderId: "521408347063",
  appId: "1:521408347063:web:462245fe82e838474f4632",
  measurementId: "G-3937C7PP7N",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
