// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQsl71jtVxD0902Y0ovfFsXB4nYtEbRsQ",
  authDomain: "myblog-475e0.firebaseapp.com",
  projectId: "myblog-475e0",
  storageBucket: "myblog-475e0.appspot.com",
  messagingSenderId: "247676059614",
  appId: "1:247676059614:web:26ec818876affaf275674f",
  measurementId: "G-ZQ40R3MF4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);//     khalchya chya aivaji he navin ala ahe

const fireDb=getFirestore(app) //        he adhichya version madhla ahe 
const auth=getAuth(app)
const storage=getStorage(app)

export {analytics,fireDb,auth,storage} 