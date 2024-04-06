import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { ref as storageRef } from "firebase/storage"; 
import firebase from "firebase/app";
import "firebase/auth";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { uploadBytes } from "firebase/storage"; 
import { uploadString } from "firebase/storage";


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
const authMain = getAuth();
const db = getDatabase();
const storage = getStorage();

export class DB {
	
	private email: string; 
	private password: string; 
	private username: string;
	
	public constructor(){
		this.email = "";
		this.password = ""; 
		this.username = ""; 
	
	}
	
	public createAccount(email: string, password: string) {
		
		this.email = email; 
		this.password = password; 
		
		
		
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
			// Signed up 
			const user = userCredential.user;
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
	}
	
	public sign(email: string, password: string) {
		this.email = email; 
		this.password = password; 
		
		signInWithEmailAndPassword(authMain, email, password)
		.then((userCredential) => {
		// Signed in 
		const user = userCredential.user;
		// ...
		})
		.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		});
		
		
		
	}
	



}

