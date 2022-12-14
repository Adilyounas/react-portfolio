import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCPafXr2Ebi5G7GkZiGBk9QN-R_g4jSbzE",
  authDomain: "portfolio-website-e6db8.firebaseapp.com",
  projectId: "portfolio-website-e6db8",
  storageBucket: "portfolio-website-e6db8.appspot.com",
  messagingSenderId: "695769573378",
  appId: "1:695769573378:web:1d5bae9102d37b331bdf1b"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore()