import firebase from "firebase";
import "firebase/auth";

firebase.initializeApp({
	apiKey: "AIzaSyCgC_TwHmNJYasOqiXU6uqAQepOlw2XOLQ",
	authDomain: "slack-clone-4ae80.firebaseapp.com",
	databaseURL: "https://slack-clone-4ae80-default-rtdb.firebaseio.com",
	projectId: "slack-clone-4ae80",
	storageBucket: "slack-clone-4ae80.appspot.com",
	messagingSenderId: "656383465813",
	appId: "1:656383465813:web:f0ff764385fde12c0cb7dc",
	measurementId: "G-B2SDCH1GGQ",
});

export const auth = firebase.auth();
export const db = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
	auth
		.signInWithPopup(googleProvider)
		.then((res) => {
			// user object
			console.log(res.user);
		})
		.catch((error) => {
			console.log(error.message);
		});
};
