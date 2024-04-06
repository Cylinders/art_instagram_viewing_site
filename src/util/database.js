import React, { useRef, useState } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import GoogleButton from 'react-google-button'
import { NavLink } from "react-router-dom";
import { getStorage, ref as stoRef, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
import { child, get } from "firebase/database";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

import { getDatabase, ref, set } from "firebase/database";

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



function GetUser() {
	const user = useAuthState(auth);
	return user;
}

function getPosts() {
	return [["post name", "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/b2/1f/21/b21f21a8-e4f6-b7d2-1fec-8e5430273077/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png", "author"], ["post name", "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/b2/1f/21/b21f21a8-e4f6-b7d2-1fec-8e5430273077/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png", "author"], ["post name", "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/b2/1f/21/b21f21a8-e4f6-b7d2-1fec-8e5430273077/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png", "author"], ["post name", "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/b2/1f/21/b21f21a8-e4f6-b7d2-1fec-8e5430273077/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png", "author"], ["post name", "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/b2/1f/21/b21f21a8-e4f6-b7d2-1fec-8e5430273077/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png", "author"], ["post name", "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/b2/1f/21/b21f21a8-e4f6-b7d2-1fec-8e5430273077/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png", "author"], ["post name", "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/b2/1f/21/b21f21a8-e4f6-b7d2-1fec-8e5430273077/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png", "author"]]
};
function getNav() {
	if (true) {
		return signOut();
	}
	return <NavLink to="/login" className="mx-auto h-max"><p className="text-center text-xs mx-auto mt-1 mb-0">Log In</p></NavLink>
}

function makePost(title, postContent, postDescription, tag) {

	const storage = getStorage();

	const storageRef = stoRef(storage, 'posts');

	const db = getDatabase();
	uploadBytes(storageRef, postContent).then((snapshot) => {
		console.log('Uploaded a blob or file!');
		console.log(postContent);
		console.log(storageRef);
	});


	set(ref(db, 'posts/' + title), {
		name: title,
		likes: 0,
		likes: { likes: 0 },
		artTags: tag,
		comments: { comment0: postDescription }
	});
}

function addLike(postName) {


	const db = getDatabase();

	let likeNum = 0;
	const dbRef = ref(getDatabase());

	get(child(dbRef, `posts/${postName}/likes`)).then((snapshot) => {
		if (snapshot.exists()) {
			likeNum = Number(snapshot.val());
		} else {
			console.log("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});

	set(ref(db, 'posts/' + postName), {
		likes: likeNum + 1
	});


}

function signIn(email, password) {
	const auth = getAuth();
	return signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// If sign-in is successful, return true
			return true;
		})
		.catch((error) => {
			// If there's an error, log it and return false
			console.error("Error signing in:", error);
			return false;
		});
}

function createAccount(email, password) {
	const auth = getAuth();
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;

		});

}

function getSign() {
	return true;
}
function signOut() {
	const auth = getAuth();
	try {
		signOut(auth);
		console.log("Sign-out successful");
	} catch (error) {
		console.error("Error signing out:", error);
	}
}

function addComment(post, message) {

	const db = getDatabase();

	let likeNum = {};
	const dbRef = ref(getDatabase());

	get(child(dbRef, `posts/${post}/likes`)).then((snapshot) => {
		if (snapshot.exists()) {
			likeNum = Number(snapshot.val());
		} else {
			console.log("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});

	set(ref(db, 'posts/' + post + "/likes"), {
		likes: message
	});


}


function signUp(email, password) {
	const auth = getAuth();
	return createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// User account created successfully
			const user = userCredential.user;
			console.log('User created:', user);


			return true;
		})
		.catch((error) => {
			// Error occurred during account creation
			const errorMessage = error.message;
			console.error('Error creating user:', errorMessage);

			return false;
		});
}

function downloadAll() {
const storage = getStorage();

// Create a reference under which you want to list
const listRef = ref(storage, 'files/uid');

// Find all the prefixes and items.
listAll(listRef)
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
    });
    res.items.forEach((itemRef) => {
        const storage = getStorage();
getDownloadURL(ref(storage, 'images/stars.jpg'))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    const img = document.getElementById('myimg');
    img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });

    });
  }).catch((error) => {
    // Uh-oh, an error occurred!
  });

}


export { getPosts, getSign, signIn, signUp, getNav, addLike, makePost, signOut, createAccount, addComment,};
