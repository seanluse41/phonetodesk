import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCUZlMHGTj3kh_xWWxYyckbcgK9yytUOGg",
    authDomain: "phone-to-desk.firebaseapp.com",
    databaseURL: "https://phone-to-desk.firebaseio.com",
    projectId: "phone-to-desk",
    storageBucket: "phone-to-desk.appspot.com",
    messagingSenderId: "795879645074",
    appId: "1:795879645074:web:f47a813922495e17896b4b",
    measurementId: "G-W7J6RKG8J7"
};

console.log(firebase);


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();