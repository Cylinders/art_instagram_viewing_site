import React, { useRef, useState } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import GoogleButton from 'react-google-button'
import { getDatabase, ref, set } from "firebase/database";
import { getStorage ,ref as stoRef ,uploadBytes } from "firebase/storage";
import {child, get } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
  apiKey: "AIzaSyBWxx3OKOEQ1EFfeVruvRtVdFX2z-3czk4",
  authDomain: "artinstagram-118a5.firebaseapp.com",
  databaseURL: "https://artinstagram-118a5-default-rtdb.firebaseio.com",
  projectId: "artinstagram-118a5",
  storageBucket: "artinstagram-118a5.appspot.com",
  messagingSenderId: "1071095007421",
  appId: "1:1071095007421:web:b3bb6d6cc9cef916ebcfd4",
  measurementId: "G-X52K68T1ZP",
  storageBucket: 'gs://artinstagram-118a5.appspot.com'
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();
// Initialize Firebase
var user;
function Database() {  
    user = useAuthState(auth);
    
}
function signIn(){
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    
  }
  

  return (
    <>
    {
            <GoogleButton
              type="light"
                className="m-auto w-1/2 flex justify-center border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-10"
                onClick={() => { signInWithGoogle() }}
                />
            
        }
    </>
  )

}
function signOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function GetUser(){
  user = useAuthState(auth);
  return user;
}

function getPosts(){
    return [["post name", "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/b2/1f/21/b21f21a8-e4f6-b7d2-1fec-8e5430273077/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png", "author"],["post name", "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/b2/1f/21/b21f21a8-e4f6-b7d2-1fec-8e5430273077/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png", "author"],["post name", "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/b2/1f/21/b21f21a8-e4f6-b7d2-1fec-8e5430273077/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png", "author"],["post name", "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/b2/1f/21/b21f21a8-e4f6-b7d2-1fec-8e5430273077/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png", "author"],["post name", "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/b2/1f/21/b21f21a8-e4f6-b7d2-1fec-8e5430273077/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png", "author"],["post name", "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/b2/1f/21/b21f21a8-e4f6-b7d2-1fec-8e5430273077/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png", "author"],["post name", "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/b2/1f/21/b21f21a8-e4f6-b7d2-1fec-8e5430273077/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png", "author"]]
};

function makePost(title, postContent, postDescription, tag) {

	const storage = getStorage();

	const storageRef = stoRef(storage, 'some-child');

	const db = getDatabase();
	uploadBytes(storageRef, postContent).then((snapshot) => {
		console.log('Uploaded a blob or file!');
	});
	
	
	set(ref(db, 'posts/' + title), {
		name: title,
		description: postDescription,
		likes: {likes: 0},
		artTags: tag, 
	});
}

function addLike(postName){
	const db = getDatabase();
	let likeNum = 0; 
	const dbRef = ref(getDatabase());

	get(child(dbRef, `posts/${postName}/likes`)).then((snapshot) => {
	if (snapshot.exists()) {
		likeNum = snapshot.val();
	} else {
		console.log("No data available");
	}
	}).catch((error) => {
		console.error(error);
	});

	set(ref(db, 'posts/' + postName), {
		likes: likeNum
	});
	
	
}


export {getPosts, GetUser, signIn, signOut, makePost, addLike};