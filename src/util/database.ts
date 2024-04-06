import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import firebase from "firebase/app";
import "firebase/auth";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWxx3OKOEQ1EFfeVruvRtVdFX2z-3czk4",
  authDomain: "artinstagram-118a5.firebaseapp.com",
  databaseURL: "https://artinstagram-118a5-default-rtdb.firebaseio.com",
  projectId: "artinstagram-118a5",
  storageBucket: "artinstagram-118a5.appspot.com",
  messagingSenderId: "1071095007421",
  appId: "1:1071095007421:web:b3bb6d6cc9cef916ebcfd4",
  measurementId: "G-X52K68T1ZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const userAuth = firebase.auth();
export class DB {
    public alias: string; 
	public constructor(idInput: string) {
		this.alias = idInput; 
	}
	
	public logInWithEmailAndPassword(email: string, password: string) : Promise<boolean> {
			return await signInWithEmailAndPassword(auth, email, password);
	};

};
