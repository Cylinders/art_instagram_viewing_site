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




    public email: string; 
    public username: string; 
	
	public constructor() {
        this.email = "";
        this.username = ""; 
	}
	
	public returnUser() {
		return auth.currentUser; 
	}
	public killUser() {
		signOut(auth).then(() => {
		  // Sign-out successful.
		}).catch((error) => {
		  // An error happened.
		});
	}
	
	public logInWithEmailAndPassword(email: string, password: string){
			return signInWithEmailAndPassword(authMain, email, password);
	};
	
    public getPosts(): string[][]{
        return [["post name", "test picture", "author"]]
    }
	
    public createAccount(email: string, password: string, username: string){
        this.email = email; 
        this.username = username; 
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
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

    private initAccount() {
        console.log("BABY GIRL");
    }
    // postimage should be the path to the directory FROM HERE lmao
    
    public post(postName: string, postImage: string) {
        set(ref(db, 'post/' + this.email), {
            post: postImage,
        });

        const postMain = storageRef(storage, postImage);

        // uploadBytes(postMain, File).then((snapshot) => {
        //     console.log('Uploaded a blob or file!');
        // });

    }
	
	public writeTest(write: string){
		set(ref(db, 'test'), {
            test: write,
        });
	}




};
